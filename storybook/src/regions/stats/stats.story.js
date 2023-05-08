import { html } from "lit";
import {
  simple3Stats,
  simple4Stats,
  imageLeftStats,
  imageRightStats,
  splitLeftStats,
  splitRightStats,
  descriptionStats,
} from "./stats.js";

export default {
  title: "Design System/Regions/Stats",
  decorators: [
    (story) => html`<div style="inline-size: 95vw">${story()}</div>`,
  ],
};

export const Simple3 = () => simple3Stats;
export const Simple4 = () => simple4Stats;
export const ImageLeft = () => imageLeftStats;
export const ImageRight = () => imageRightStats;
export const SplitLeft = () => splitLeftStats;
export const SplitRight = () => splitRightStats;
export const Description = () => descriptionStats;
