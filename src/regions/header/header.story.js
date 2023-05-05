import { html } from "lit";
import {
  leftHeader,
  rightHeader,
  leftImageHeader,
  rightImageHeader,
  centerHeader,
  leftInverseHeader,
  rightInverseHeader,
  leftImageInverseHeader,
  rightImageInverseHeader,
  centerInverseHeader,
} from "./header.js";

export default {
  title: "Regions/Header",
  argTypes: {
    navbar: {
      control: "select",
      options: ["center", "spaced", "start", "end", "stacked"],
    },
  },
  decorators: [
    (story) => html`<div style="inline-size: 90vw">${story()}</div>`,
  ],
};

export const Left = ({ navbar }) => leftHeader(navbar);
export const Right = ({ navbar }) => rightHeader(navbar);
export const LeftImage = ({ navbar }) => leftImageHeader(navbar);
export const RightImage = ({ navbar }) => rightImageHeader(navbar);
export const Center = ({ navbar }) => centerHeader(navbar);
export const LeftInverse = ({ navbar }) => leftInverseHeader(navbar);
export const RightInverse = ({ navbar }) => rightInverseHeader(navbar);
export const LeftImageInverse = ({ navbar }) => leftImageInverseHeader(navbar);
export const RightImageInverse = ({ navbar }) =>
  rightImageInverseHeader(navbar);
export const CenterInverse = ({ navbar }) => centerInverseHeader(navbar);
