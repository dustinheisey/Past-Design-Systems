import { html } from "lit";
import "./ds-toggle.js";

export default {
  title: "Components/Switch",
  component: "ds-toggle",
};

export const Default = () => html` <ds-toggle></ds-toggle> `;

export const Checked = () => html` <ds-toggle checked></ds-toggle> `;

export const Disabled = () => html` <ds-toggle disabled></ds-toggle> `;
