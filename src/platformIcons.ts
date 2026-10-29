import { siBeatport, siDeezer } from "simple-icons";
import bandcampIcon from "./assets/icons/bandcamp.svg?raw";
import spotifyIcon from "./assets/icons/spotify.svg?raw";
import appleIcon from "./assets/icons/itunes.svg?raw";
import amazonIcon from "./assets/icons/amazon.svg?raw";
import soundcloudIcon from "./assets/icons/soundcloud.svg?raw";

const simple = ({ path }: { path: string }) =>
  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${path}"/></svg>`;

// Same order as PlatformLinks. Deezer/Beatport only exist here, the page itself shows text for them.
const PLATFORM_ICONS: [string, string][] = [
  ["bandcamp", bandcampIcon],
  ["spotify", spotifyIcon],
  ["apple", appleIcon],
  ["amazon", amazonIcon],
  ["soundcloud", soundcloudIcon],
  ["deezer", simple(siDeezer)],
  ["beatport", simple(siBeatport)],
];

/** Standalone SVG strings (fill="currentColor") for the platforms a release has a link for. */
export const platformIconSvgs = (links: Record<string, string | undefined>) =>
  PLATFORM_ICONS.filter(([key]) => links[key]).map(([, svg]) =>
    // amazon.svg has no xmlns (only valid inline), canvas and sharp need it
    svg.includes("xmlns=") ? svg : svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"'),
  );
