import { html } from "lit";
import "./ds-tooltip.js";

export default {
  title: "Components/Tooltip",
  component: "ds-tooltip",
};

export const Default = () =>
  html`
    <p>
      Hover over this text to see the tooltip.
      <ds-tooltip>Tooltip content goes here.</ds-tooltip>
    </p>
  `;
