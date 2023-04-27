import { html } from "lit";
import "./ds-ring.js";

export default {
  title: "Components/Progress Ring",
  component: "ds-ring",
};

export const Default = () => html`<ds-ring></ds-ring>`;

export const CustomSize = () => html`<ds-ring size="64"></ds-ring>`;

export const CustomColor = () => html`<ds-ring color="#8bc34a"></ds-ring>`;

export const CustomStrokeWidth = () =>
  html`<ds-ring stroke-width="8"></ds-ring>`;

export const Progress50 = () => html`<ds-ring progress="50"></ds-ring>`;
