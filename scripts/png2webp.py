#!/usr/bin/env python3
"""
Converts all PNG files in a directory to WebP using ffmpeg.

Usage:
  python3 scripts/png2webp.py [source_dir] [target_dir] [prefix]

Arguments:
  source_dir  Directory with PNG files (default: public/blog)
  target_dir  Output directory (default: same as source_dir)
  prefix      If given, output files are named prefix_01.webp, prefix_02.webp, ...
              If omitted, the original filename is kept (foo.png → foo.webp)

Examples:
  python3 scripts/png2webp.py
  python3 scripts/png2webp.py public/blog
  python3 scripts/png2webp.py public/images public/images
"""

import os
import re
import subprocess
import sys

DEFAULT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "blog")


def next_prefix_number(target_dir, prefix):
    max_nr = -1
    pattern = re.compile(rf"^{re.escape(prefix)}_(\d+)\.webp$", re.IGNORECASE)
    for f in os.listdir(target_dir):
        m = pattern.match(f)
        if m:
            max_nr = max(max_nr, int(m.group(1)))
    return max_nr + 1


def convert(source_dir, target_dir, prefix=None):
    pngs = sorted(
        f for f in os.listdir(source_dir) if f.lower().endswith(".png")
    )

    if not pngs:
        print("No PNG files found in", source_dir)
        return

    os.makedirs(target_dir, exist_ok=True)
    nr = next_prefix_number(target_dir, prefix) if prefix else None
    converted = 0

    for png in pngs:
        src = os.path.join(source_dir, png)
        if prefix:
            dst_name = f"{prefix}_{nr:02d}.webp"
            nr += 1
        else:
            dst_name = os.path.splitext(png)[0] + ".webp"
        dst = os.path.join(target_dir, dst_name)

        print(f"  {png}  →  {dst_name}")
        result = subprocess.run(
            ["cwebp", "-q", "80", src, "-o", dst],
            capture_output=True,
            text=True,
        )

        if result.returncode != 0:
            print(f"  ERROR converting {png}:\n{result.stderr}")
        else:
            os.remove(src)
            converted += 1

    print(f"\nDone. {converted} file(s) converted.")


if __name__ == "__main__":
    source = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DIR
    if len(sys.argv) == 2:
        target = sys.argv[1]
    elif len(sys.argv) > 2:
        target = sys.argv[2]
    else:
        target = DEFAULT_DIR
    prefix = sys.argv[3] if len(sys.argv) > 3 else None

    target = os.path.abspath(target)
    source = os.path.abspath(source)

    print(f"Source : {source}")
    print(f"Target : {target}")
    if prefix:
        print(f"Prefix : {prefix}")
        print(f"Next nr: {next_prefix_number(target, prefix) if os.path.isdir(target) else 0}")
    print()

    convert(source, target, prefix)
