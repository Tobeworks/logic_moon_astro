import type { APIRoute, GetStaticPaths } from "astro";
import { readFile } from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";
import releases, { splitTitle } from "../../releases.js";
import { platformIconSvgs } from "../../platformIcons";

// 1200x630 link preview (Facebook, Twitter, ...), same look as the Instagram story image:
// square cover on the left, artist, title, platform logos and URL on the right.
const W = 1200;
const H = 630;
const SURFACE = "#141312"; // --color-surface
const PRIMARY = "#e3c7a9"; // --color-primary
const ON_SURFACE = "#e6e1df"; // --color-on-surface
const ICON = 40;

const font = (weight: 400 | 700) =>
  readFile(path.join(process.cwd(), "node_modules/@fontsource/inter/files", `inter-latin-${weight}-normal.woff`));

const dataUri = (mime: string, data: Buffer | string) =>
  `data:${mime};base64,${Buffer.from(data).toString("base64")}`;

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export const getStaticPaths = (() =>
  releases.map((release) => ({ params: { slug: release.slug }, props: { release } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { release } = props as { release: (typeof releases)[number] };

  const split = splitTitle(release.title);
  const name = split.name.toUpperCase();
  const artist = split.artist.toUpperCase();
  const titleSize = name.length <= 14 ? 64 : name.length <= 28 ? 52 : 42;

  const cover = await sharp(path.join(process.cwd(), "public", "images", "covers", release.cover))
    .resize(H, H, { fit: "cover" })
    .jpeg({ quality: 90 })
    .toBuffer();

  const icons = platformIconSvgs(release).map((svg) =>
    dataUri(
      "image/svg+xml",
      svg.replaceAll("currentColor", PRIMARY).replace("<svg", `<svg width="${ICON}" height="${ICON}"`),
    ),
  );

  const label = { fontSize: 20, letterSpacing: 5, color: PRIMARY, fontWeight: 400 };

  const tree = el("div", { display: "flex", width: W, height: H, background: SURFACE, fontFamily: "Inter" }, [
    { type: "img", props: { src: dataUri("image/jpeg", cover), width: H, height: H } },
    el(
      "div",
      { display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 56px", gap: 28 },
      [
        el("div", label, artist),
        el("div", { fontSize: titleSize, fontWeight: 700, lineHeight: 1.1, letterSpacing: 1, color: ON_SURFACE }, name),
        icons.length
          ? el(
              "div",
              { display: "flex", gap: 28 },
              icons.map((src) => ({ type: "img", props: { src, width: ICON, height: ICON } })),
            )
          : el("div", { display: "flex" }, ""),
        el("div", label, `${release.year}  ·  LOGIC-MOON.DE`),
      ],
    ),
  ]);

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: W,
    height: H,
    fonts: [
      { name: "Inter", data: await font(400), weight: 400, style: "normal" },
      { name: "Inter", data: await font(700), weight: 700, style: "normal" },
    ],
  });

  const jpeg = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
  return new Response(jpeg, { headers: { "Content-Type": "image/jpeg" } });
};
