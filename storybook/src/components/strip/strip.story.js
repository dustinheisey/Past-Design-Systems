import { html } from "lit";
import { cardStrip } from "./strip.js";

export default {
  title: "Design System/Components/Strip",
  decorators: [
    (story) => html`<div style="inline-size: 50vw;">${story()}</div>`,
  ],
};

export const CardStrip = () => cardStrip;
