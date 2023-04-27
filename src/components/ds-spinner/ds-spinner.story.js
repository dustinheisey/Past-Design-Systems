import { html } from "lit";
import "./ds-spinner.js";

export default {
  title: "Components/Spinner",
  component: "ds-spinner",
};

export const Default = () => html`<ds-spinner></ds-spinner>`;

export const CustomSize = () => html`<ds-spinner size="64"></ds-spinner>`;

export const CustomColor = () =>
  html`<ds-spinner color="#8bc34a"></ds-spinner>`;
