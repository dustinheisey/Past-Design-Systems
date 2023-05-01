import { html } from "lit";
import "./nds-skeleton.js";

export default {
  title: "Components/Content/Skeleton",
  component: "nds-skeleton",
};

export const Default = () => html` <nds-skeleton></nds-skeleton> `;

export const WithCustomWidth = () =>
  html` <nds-skeleton style="width: 200px"></nds-skeleton> `;

export const WithCustomHeight = () =>
  html` <nds-skeleton style="height: 50px"></nds-skeleton> `;

export const WithCustomBorderRadius = () =>
  html` <nds-skeleton style="border-radius: 10px"></nds-skeleton> `;
