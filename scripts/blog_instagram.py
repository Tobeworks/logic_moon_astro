#!/usr/bin/env python3
"""
Generate Instagram post images for Logic Moon blog posts.

Usage:
  pnpm blog:instagram <slug> [quote]

  Without quote: Claude generates 5 hook suggestions, you pick one.
  With quote:    Skips generation, renders immediately.

Output:
  public/social/<slug>_1x1.jpg   (1080×1080)
  public/social/<slug>_4x5.jpg   (1080×1350)

Examples:
  pnpm blog:instagram my-music-process
  pnpm blog:instagram my-music-process "Constraints are the engine of creativity."
"""

import sys
import os
import textwrap
from PIL import Image, ImageDraw, ImageFont

try:
    import anthropic
except ImportError:
    print("✗ anthropic package not found. Run: pip3 install --break-system-packages anthropic")
    sys.exit(1)

# ── Fonts ────────────────────────────────────────────────────────────────────
FONT_DIR_USER   = os.path.expanduser("~/Library/Fonts")

FONT_SERIF_ITALIC = os.path.join(FONT_DIR_USER, "Lora-Italic-VariableFont_wght.ttf")
FONT_SANS_LIGHT   = os.path.join(FONT_DIR_USER, "Poppins-Light.ttf")

GOLD  = (200, 180, 120, 220)
WHITE = (255, 255, 255, 255)

LABEL    = "NEW BLOG · LOGIC MOON"
BASE_URL = "logic-moon.de/blog"


# ── Helpers ──────────────────────────────────────────────────────────────────

def load_env(project_root: str):
    env_path = os.path.join(project_root, ".env")
    if not os.path.exists(env_path):
        return
    with open(env_path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, val = line.split("=", 1)
            os.environ[key.strip()] = val.strip().strip('"').strip("'")


def parse_post(md_path: str) -> tuple[dict, str]:
    with open(md_path) as f:
        raw = f.read()
    meta, content = {}, raw
    if raw.startswith("---"):
        parts = raw.split("---", 2)
        if len(parts) >= 3:
            for line in parts[1].splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    meta[k.strip()] = v.strip().strip('"').strip("'")
            content = parts[2].strip()
    return meta, content


# ── Hook generation ──────────────────────────────────────────────────────────

def generate_hooks(title: str, description: str, content: str, api_key: str) -> list[str]:
    prompt = f"""You are writing visual quote texts for Logic Moon Instagram posts.

Logic Moon is a solo ambient/drone project from Germany. The artist writes about music in a direct,
thoughtful way — no mysticism, no hype. The writing voice is: first person, declarative, slightly dry.
Observations, not proclamations. The blog reads like a producer thinking out loud, not performing depth.

Examples of the writing style:
- "Constraints are not the enemy of creativity. They are its engine."
- "I do not browse. I have made my choice and I work with it."
- "The drone defines the space. Everything that comes later has to live inside that space."
- "Distance is not optional — it is essential."

Blog post:
Title: {title}
Description: {description}

Content excerpt:
{content[:1500]}{"…" if len(content) > 1500 else ""}

Generate 5 short quote texts that could appear as the visual quote on an Instagram image.
Each quote should:
- Be ONE sentence, max 12 words
- Sound like something the artist actually wrote or could have written — not generic inspiration-speak
- Be dry and specific, not vague and poetic
- Capture a concrete idea from the post, not the general vibe
- Be in English

Output: one quote per line, no numbering, no extra text."""

    client = anthropic.Anthropic(api_key=api_key)
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=512,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = response.content[0].text.strip()
    hooks = [h.strip().strip('"').strip("'") for h in raw.splitlines() if h.strip()]
    return hooks[:5]


def generate_summary(title: str, description: str, content: str, slug: str, api_key: str) -> str:
    prompt = f"""You are writing an Instagram post caption for Logic Moon — a solo ambient/drone music project from Germany.

The caption should summarise a blog post in the artist's own voice — direct, first person, no hype.
The writing style: dry, specific, thoughtful. Like a producer sharing a genuine reflection, not marketing copy.
No emojis. No "Check this out". End with a soft CTA: "Full post at https://logic-moon.de/blog/{slug}"

After the caption, add a blank line, then 15–20 relevant Instagram hashtags.
Mix: niche/specific tags (#ambientproducer #dronemusic #musicproduction) with slightly broader ones (#ambientmusic #electronicmusic #ableton).
No generic spam tags (#music #art #love etc.).

Blog post:
Title: {title}
Description: {description}

Full content:
{content}

Write the caption (4–8 sentences) followed by the hashtags. Nothing else."""

    client = anthropic.Anthropic(api_key=api_key)
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=512,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.content[0].text.strip()


def refine_hook(quote: str, instruction: str, api_key: str) -> str:
    prompt = f"""You are refining a visual quote for a Logic Moon Instagram post.

Logic Moon is a solo ambient/drone project from Germany. The writing voice is direct, dry, first person.
Concrete observations, not vague inspiration. Think: producer thinking out loud.

Current quote:
"{quote}"

Refinement instruction:
{instruction}

Return only the refined quote — one sentence, max 12 words, no quotes around it, nothing else."""

    client = anthropic.Anthropic(api_key=api_key)
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=128,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.content[0].text.strip().strip('"').strip("'")


# ── Image rendering ──────────────────────────────────────────────────────────

def apply_overlays(img: Image.Image, W: int, H: int) -> Image.Image:
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # top fade
    for y in range(int(H * 0.35)):
        alpha = int(180 * (1 - y / (H * 0.35)))
        draw.line([(0, y), (W, y)], fill=(0, 0, 0, alpha))

    # bottom fade
    grad_start = H - int(H * 0.62)
    for y in range(H - grad_start):
        alpha = int(225 * ((y / (H - grad_start)) ** 1.2))
        draw.line([(0, grad_start + y), (W, grad_start + y)], fill=(0, 0, 0, alpha))

    return Image.alpha_composite(img, overlay)


def render(src: str, quote: str, slug: str, W: int, H: int, suffix: str):
    img = Image.open(src).convert("RGBA")
    iw, ih = img.size

    target_ratio = W / H
    src_ratio = iw / ih
    if src_ratio > target_ratio:
        new_w = int(ih * target_ratio)
        x0 = (iw - new_w) // 2
        img = img.crop((x0, 0, x0 + new_w, ih))
    else:
        new_h = int(iw / target_ratio)
        y0 = (ih - new_h) // 2
        img = img.crop((0, y0, iw, y0 + new_h))

    img = img.resize((W, H), Image.LANCZOS)
    img = apply_overlays(img, W, H)
    draw = ImageDraw.Draw(img)

    margin = 160
    f_label = ImageFont.truetype(FONT_SANS_LIGHT, 30)
    f_quote = ImageFont.truetype(FONT_SERIF_ITALIC, 64)
    f_url   = ImageFont.truetype(FONT_SANS_LIGHT, 30)

    # safe zone for 1x1: Instagram crops to 4x5 in feed (~135px top+bottom)
    safe_bottom = int((1350 - 1080) / 2) - 40 if W == H else 0  # ~95px

    lines = textwrap.wrap(quote, width=20)
    line_spacing = 16
    line_hs = [
        draw.textbbox((0, 0), l, font=f_quote)[3] - draw.textbbox((0, 0), l, font=f_quote)[1]
        for l in lines
    ]
    total_text_h = sum(line_hs) + line_spacing * (len(lines) - 1)

    url_text = f"{BASE_URL}/{slug}"
    url_bb   = draw.textbbox((0, 0), url_text, font=f_url)
    url_h    = url_bb[3] - url_bb[1]

    url_y   = H - margin - safe_bottom - url_h
    quote_y = url_y - 44 - total_text_h

    draw.text((margin, 72), LABEL, font=f_label, fill=GOLD)

    y = quote_y
    for i, line in enumerate(lines):
        draw.text((margin, y), line, font=f_quote, fill=WHITE)
        y += line_hs[i] + line_spacing

    draw.text((margin, url_y), url_text, font=f_url, fill=GOLD)

    out_dir  = os.path.join(os.path.dirname(__file__), "..", "output", slug)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, f"{slug}_{suffix}.jpg")
    img.convert("RGB").save(out_path, quality=95)
    print(f"  ✓ {out_path}")


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    slug         = sys.argv[1]
    quote        = sys.argv[2] if len(sys.argv) >= 3 else None
    skip_refine  = quote is not None  # direct quote → skip refiner

    script_dir   = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, ".."))

    load_env(project_root)

    api_key = os.environ.get("ANTHROPIC_API_KEY")

    # ── load blog post ────────────────────────────────────────────────────────
    md_path = os.path.join(project_root, "src", "content", "blog", f"{slug}.md")
    if not os.path.exists(md_path):
        print(f"✗ Blog post not found: {md_path}")
        sys.exit(1)

    meta, content = parse_post(md_path)
    title       = meta.get("title", slug)
    description = meta.get("description", "")

    # ── resolve image ─────────────────────────────────────────────────────────
    image_val = meta.get("image", "")
    src = os.path.join(project_root, "public", image_val.lstrip("/")) if image_val else None

    if not src or not os.path.exists(src):
        print(f"✗ Image not found: {src}")
        print(f"  Check 'image:' in {md_path}")
        sys.exit(1)

    print(f"\n📝 {title}\n")

    # ── generate hooks if no quote provided ───────────────────────────────────
    if not quote:
        if not api_key:
            print("✗ ANTHROPIC_API_KEY not set in .env")
            sys.exit(1)
        print("Generating hooks…")
        hooks = generate_hooks(title, description, content, api_key)

        print("\n" + "─" * 60)
        for i, hook in enumerate(hooks, 1):
            print(f"  {i}. {hook}")
        print("─" * 60)

        print("\nPick a number [1–5], or type a custom quote, or press Enter to use #1:")
        try:
            choice = input("> ").strip()
        except (KeyboardInterrupt, EOFError):
            print("\nAborted.")
            sys.exit(0)

        if choice == "":
            quote = hooks[0]
        elif choice.isdigit() and 1 <= int(choice) <= len(hooks):
            quote = hooks[int(choice) - 1]
        else:
            quote = choice

    # ── refine loop ───────────────────────────────────────────────────────────
    while not skip_refine:
        print(f'\n→ "{quote}"')
        print("\nRefine? Describe what to change, or press Enter to render:")
        try:
            refinement = input("> ").strip()
        except (KeyboardInterrupt, EOFError):
            print("\nAborted.")
            sys.exit(0)

        if not refinement:
            break

        quote = refine_hook(quote, refinement, api_key)

    print(f'\nUsing: "{quote}"\n')

    # ── render ────────────────────────────────────────────────────────────────
    render(src, quote, slug, 1080, 1080, "1x1")
    render(src, quote, slug, 1080, 1350, "4x5")

    # ── generate caption summary ──────────────────────────────────────────────
    if api_key:
        print("\nGenerating caption…")
        summary = generate_summary(title, description, content, slug, api_key)

        out_dir  = os.path.join(os.path.dirname(__file__), "..", "output", slug)
        os.makedirs(out_dir, exist_ok=True)
        txt_path = os.path.join(out_dir, f"{slug}_caption.txt")
        with open(txt_path, "w") as f:
            f.write(summary)
        print(f"  ✓ {txt_path}")
        print("\n" + "─" * 60)
        print(summary)
        print("─" * 60)

    print("\nDone.")


if __name__ == "__main__":
    main()
