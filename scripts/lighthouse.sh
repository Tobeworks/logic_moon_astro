#!/usr/bin/env bash
# Runs a Lighthouse audit against the local Astro preview server.
# Usage: ./scripts/lighthouse.sh [url-path]
# Example: ./scripts/lighthouse.sh /blog

set -euo pipefail

PORT=4321
PATH_TO_AUDIT="${1:-/}"
REPORT_DIR="lighthouse-reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_BASE="${REPORT_DIR}/report_${TIMESTAMP}"
LATEST_JSON="${REPORT_DIR}/latest.json"
PREVIEW_PID=""

mkdir -p "$REPORT_DIR"

cleanup() {
  if [ -n "$PREVIEW_PID" ] && kill -0 "$PREVIEW_PID" 2>/dev/null; then
    kill "$PREVIEW_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

# Kill anything on our port
kill_port() {
  local pids
  pids=$(lsof -ti tcp:"$1" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    echo "Killing existing processes on port $1: $pids"
    echo "$pids" | xargs kill -9 2>/dev/null || true
    sleep 1
  fi
}

echo "Building project..."
pnpm build --silent 2>&1 | tail -3

kill_port $PORT
kill_port $((PORT+1))
kill_port $((PORT+2))
kill_port $((PORT+3))

echo "Starting preview server on port ${PORT}..."
pnpm preview --port "${PORT}" --host 2>&1 &
PREVIEW_PID=$!

# Wait for server with timeout
echo "Waiting for server..."
READY=0
for i in $(seq 1 30); do
  if curl -sf "http://localhost:${PORT}" > /dev/null 2>&1; then
    echo "Server ready on port ${PORT}."
    READY=1
    break
  fi
  sleep 1
done

if [ "$READY" -eq 0 ]; then
  echo "ERROR: Server did not start within 30 seconds."
  exit 1
fi

URL="http://localhost:${PORT}${PATH_TO_AUDIT}"
echo "Running Lighthouse on ${URL}..."

lighthouse "$URL" \
  --output=json,html \
  --output-path="${REPORT_BASE}" \
  --chrome-flags="--headless --no-sandbox --disable-gpu" \
  --quiet \
  --only-categories=performance,accessibility,best-practices,seo

# Lighthouse appends .report.json / .report.html when using multiple outputs
ACTUAL_JSON="${REPORT_BASE}.report.json"
ACTUAL_HTML="${REPORT_BASE}.report.html"

if [ ! -f "$ACTUAL_JSON" ]; then
  echo "ERROR: Report not found at ${ACTUAL_JSON}"
  ls "${REPORT_DIR}/"
  exit 1
fi

cp "$ACTUAL_JSON" "$LATEST_JSON"

echo ""
echo "=== Lighthouse Scores ==="
node -e "
const r = require('./${LATEST_JSON}');
const cats = r.categories;
const score = (s) => Math.round(s.score * 100);
const icon = (n) => n >= 90 ? '✅' : n >= 50 ? '⚠️ ' : '❌';
const fmt = (label, cat) => {
  const n = score(cat);
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
const audits = r.audits;
const ms = (v) => v >= 1000 ? (v/1000).toFixed(1) + 's' : Math.round(v) + 'ms';
if (audits['largest-contentful-paint']) console.log('  LCP:   ' + ms(audits['largest-contentful-paint'].numericValue));
if (audits['first-contentful-paint'])   console.log('  FCP:   ' + ms(audits['first-contentful-paint'].numericValue));
if (audits['total-blocking-time'])      console.log('  TBT:   ' + ms(audits['total-blocking-time'].numericValue));
if (audits['cumulative-layout-shift'])  console.log('  CLS:   ' + audits['cumulative-layout-shift'].numericValue.toFixed(3));
if (audits['speed-index'])              console.log('  SI:    ' + ms(audits['speed-index'].numericValue));
"

echo ""
echo "Top Opportunities:"
node -e "
const r = require('./${LATEST_JSON}');
const ops = Object.values(r.audits)
  .filter(a => a.details?.type === 'opportunity' && a.score !== null && a.score < 1)
  .sort((a,b) => (b.details?.overallSavingsMs||0) - (a.details?.overallSavingsMs||0))
  .slice(0, 5);
if (ops.length === 0) { console.log('  None found'); }
ops.forEach(a => {
  const save = a.details?.overallSavingsMs ? ' (~' + Math.round(a.details.overallSavingsMs) + 'ms)' : '';
  console.log('  - ' + a.title + save);
});
"

echo ""
echo "Failed Audits (score < 0.9):"
node -e "
const r = require('./${LATEST_JSON}');
const failed = Object.values(r.audits)
  .filter(a => a.score !== null && a.score < 0.9 && a.score !== undefined)
  .sort((a,b) => a.score - b.score)
  .slice(0, 10);
failed.forEach(a => {
  const icon = a.score < 0.5 ? '❌' : '⚠️ ';
  console.log(icon + ' [' + Math.round(a.score*100) + '] ' + a.title);
});
"

echo ""
echo "Reports:"
echo "  JSON: ${ACTUAL_JSON}"
echo "  HTML: ${ACTUAL_HTML}"
