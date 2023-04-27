import { html } from "lit";
import "./nds-spin-button.js";

export default {
  title: "Components/Input/Spin Buttons",
  component: "ds-spin-button",
};

export const Default = () => html` <nds-spin-button></nds-spin-button> `;

export const WithMinMax = () =>
  html` <nds-spin-button min="10" max="100"></nds-spin-button> `;

export const WithStep = () =>
  html` <nds-spin-button step="0.1"></nds-spin-button> `;
