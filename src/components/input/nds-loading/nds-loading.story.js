import { html } from "lit";
import "./nds-loading.js";

export default {
  title: "Components/Input/Loading",
  component: "ds-spinner",
};

export const Default = () => html`<nds-spinner></nds-spinner>`;

export const CustomSize = () => html`<nds-spinner size="64"></nds-spinner>`;

export const CustomColor = () =>
  html`<nds-spinner color="#8bc34a"></nds-spinner>`;
