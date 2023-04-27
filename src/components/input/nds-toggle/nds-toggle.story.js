import { html } from "lit";
import "./nds-toggle.js";

export default {
  title: "Components/Input/Toggle",
  component: "ds-toggle",
};

export const Default = () => html` <nds-toggle></nds-toggle> `;

export const Checked = () => html` <nds-toggle checked></nds-toggle> `;

export const Disabled = () => html` <nds-toggle disabled></nds-toggle> `;
