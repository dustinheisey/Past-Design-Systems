import { html } from "lit";
import "./nds-ring.js";

export default {
  title: "Components/Content/Ring",
  component: "nds-ring",
};

export const Default = () => html`<nds-ring></nds-ring>`;

export const CustomSize = () => html`<nds-ring size="64"></nds-ring>`;

export const CustomColor = () => html`<nds-ring color="#8bc34a"></nds-ring>`;

export const CustomStrokeWidth = () =>
  html`<nds-ring stroke-width="8"></nds-ring>`;

export const Progress50 = () => html`<nds-ring progress="50"></nds-ring>`;
