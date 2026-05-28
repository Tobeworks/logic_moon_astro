#!/usr/bin/env bash
# Lighthouse audit via Docker + nginx (production-like, HTTPS).
#
# Usage:
#   bash scripts/lighthouse.sh [path]           — audit homepage
#   bash scripts/lighthouse.sh /blog            — audit specific path
#   bash scripts/lighthouse.sh --no-build       — skip Docker build, reuse existing image
#   bash scripts/lighthouse.sh --no-build /blog — skip build + specific path
#
# Prerequisites: Docker, lighthouse CLI (npm i -g lighthouse), Chrome

set -euo pipefail

# --- Parse args ---
NO_BUILD=false
PATH_TO_AUDIT="/"

for arg in "$@"; do
  case "$arg" in
    --no-build) NO_BUILD=true ;;
    /*) PATH_TO_AUDIT="$arg" ;;
  esac
done

PROJECT_NAME=$(node -p "require('./package.json').name")
DOCKER_PORT=8443
DOCKER_IMAGE="${PROJECT_NAME}-lighthouse"
DOCKER_CONTAINER="${PROJECT_NAME}-lh-test"
REPORT_DIR="lighthouse-reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_BASE="${REPORT_DIR}/report_${TIMESTAMP}"
LATEST_JSON="${REPORT_DIR}/latest.json"

mkdir -p "$REPORT_DIR"

cleanup() {
  docker rm -f "$DOCKER_CONTAINER" 2>/dev/null || true
}
trap cleanup EXIT

kill_port() {
  local pids
  pids=$(lsof -ti tcp:"$1" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    echo "Killing existing processes on port $1"
    echo "$pids" | xargs kill -9 2>/dev/null || true
    sleep 1
  fi
}

# --- Build ---
if $NO_BUILD; then
  echo "Skipping build (--no-build)"
else
  echo "Building project..."
  pnpm build --silent 2>&1 | tail -3
  echo "Building Docker image..."
  docker build -t "$DOCKER_IMAGE" -f Dockerfile.lighthouse . --quiet
fi

# --- Start container ---
kill_port $DOCKER_PORT
docker rm -f "$DOCKER_CONTAINER" 2>/dev/null || true

echo "Starting nginx container on port ${DOCKER_PORT}..."
docker run -d --name "$DOCKER_CONTAINER" -p "${DOCKER_PORT}:443" "$DOCKER_IMAGE" > /dev/null

URL="https://localhost:${DOCKER_PORT}${PATH_TO_AUDIT}"
echo "Waiting for nginx..."
for i in $(seq 1 20); do
  if curl -sfk "$URL" > /dev/null 2>&1; then
    echo "nginx ready."
    break
  fi
  sleep 1
done

# --- Run Lighthouse ---
echo "Running Lighthouse on ${URL}..."
lighthouse "$URL" \
  --output=json,html \
  --output-path="${REPORT_BASE}" \
  --chrome-flags="--headless --no-sandbox --disable-gpu --ignore-certificate-errors" \
  --throttling-method=provided \
  --quiet \
  --only-categories=performance,accessibility,best-practices,seo

ACTUAL_JSON="${REPORT_BASE}.report.json"
ACTUAL_HTML="${REPORT_BASE}.report.html"

[ -f "$ACTUAL_JSON" ] || { echo "ERROR: Report not found at ${ACTUAL_JSON}"; exit 1; }
cp "$ACTUAL_JSON" "$LATEST_JSON"

# --- Print results ---
echo ""
echo "=== Lighthouse Scores ==="
node -e "
const r = require('./${LATEST_JSON}');
const cats = r.categories;
const icon = (n) => n >= 90 ? '✅' : n >= 50 ? '⚠️ ' : '❌';
const fmt = (label, cat) => {
  const n = Math.round(cat.score * 100);
  console.log(icon(n) + ' ' + label.padEnd(16) + n);
};
fmt('Performance', cats.performance);
fmt('Accessibility', cats.accessibility);
fmt('Best Practices', cats['best-practices']);
fmt('SEO', cats.seo);
"

echo ""
echo "Key Metrics:"
node -e "
const r = require('./${LATEST_JSON}');
const a = r.audits;
const ms = (v) => v >= 1000 ? (v/1000).toFixed(1)+'s' : Math.round(v)+'ms';
if (a['largest-contentful-paint']) console.log('  LCP:  ', ms(a['largest-contentful-paint'].numericValue));
if (a['first-contentful-paint'])   console.log('  FCP:  ', ms(a['first-contentful-paint'].numericValue));
if (a['total-blocking-time'])      console.log('  TBT:  ', ms(a['total-blocking-time'].numericValue));
if (a['cumulative-layout-shift'])  console.log('  CLS:  ', a['cumulative-layout-shift'].numericValue.toFixed(3));
if (a['speed-index'])              console.log('  SI:   ', ms(a['speed-index'].numericValue));
"

echo ""
echo "Top Opportunities:"
node -e "
const r = require('./${LATEST_JSON}');
const ops = Object.values(r.audits)
  .filter(a => a.details?.type === 'opportunity' && a.score !== null && a.score < 1)
  .sort((a,b) => (b.details?.overallSavingsMs||0) - (a.details?.overallSavingsMs||0))
  .slice(0, 5);
if (!ops.length) { console.log('  None — great job!'); }
ops.forEach(a => {
  const save = a.details?.overallSavingsMs ? ' (~' + Math.round(a.details.overallSavingsMs) + 'ms)' : '';
  console.log('  -', a.title + save);
});
"

echo ""
echo "Failed Audits (score < 0.9):"
node -e "
const r = require('./${LATEST_JSON}');
const failed = Object.values(r.audits)
  .filter(a => a.score !== null && a.score < 0.9)
  .sort((a,b) => a.score - b.score)
  .slice(0, 8);
failed.forEach(a => {
  const icon = a.score < 0.5 ? '❌' : '⚠️ ';
  console.log(icon + ' [' + Math.round(a.score*100) + '] ' + a.title);
});
"

echo ""
echo "Reports: ${ACTUAL_HTML}"
