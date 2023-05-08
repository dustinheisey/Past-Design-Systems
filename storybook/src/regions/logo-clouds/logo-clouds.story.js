import { html } from "lit";
import {
  gridLogoCloud,
  simpleLogoCloud,
  splitLogoCloud,
} from "./logo-clouds.js";

export default {
  title: "Design System/Regions/Logo Clouds",
  decorators: [
    (story) => html`<div style="inline-size: 75vw">${story()}</div>`,
  ],
};

export const Grid = () => gridLogoCloud;
export const Simple = () => simpleLogoCloud;
export const Split = () => splitLogoCloud;
