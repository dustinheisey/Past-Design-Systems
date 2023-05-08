import { html } from "lit";
import {
  centeredNavbar,
  spacedNavbar,
  startNavbar,
  endNavbar,
  stackedNavbar,
} from "./navbar.js";

export default {
  title: "Design System/Regions/Navbar",
  decorators: [
    (story) => html`<div style="inline-size: 75vw">${story()}</div>`,
  ],
};

export const Centered = () => centeredNavbar;
export const Spaced = () => spacedNavbar;
export const Start = () => startNavbar;
export const End = () => endNavbar;
export const Stacked = () => stackedNavbar;
