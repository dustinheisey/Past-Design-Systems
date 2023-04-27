import { html } from "lit";
import "./nds-tooltip.js";

export default {
  title: "Components/Containers/Tooltip",
  component: "ds-tooltip",
};

export const Default = () =>
  html`
    <p>
      Hover over this text to see the tooltip.
      <nds-tooltip>Tooltip content goes here.</nds-tooltip>
    </p>
  `;
