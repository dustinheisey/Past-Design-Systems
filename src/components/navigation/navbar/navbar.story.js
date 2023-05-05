import { html } from "lit";
import { centered, spaced, start, end, stacked } from "./navbar.js";

export default {
  title: "Components/Navigation/Navbar",
  decorators: [
    (story) => html`<div style="inline-size: 75vw">${story()}</div>`,
  ],
};

export const Centered = () => centered;
export const Spaced = () => spaced;
export const Start = () => start;
export const End = () => end;
export const Stacked = () => stacked;
