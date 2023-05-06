// import { html } from "lit";
import {
  leftHero,
  rightHero,
  splitLeftHero,
  splitRightHero,
  angledTopLeftHero,
  angledTopRightHero,
  angledBottomLeftHero,
  angledBottomRightHero,
  tiles2LeftHero,
  tiles2RightHero,
  tiles3LeftHero,
  tiles3RightHero,
  centerImageHero,
  leftBgHero,
  centerBgHero,
  rightBgHero,
  leftGradientHero,
  centerGradientHero,
  rightGradientHero,
} from "./hero.js";

export default {
  title: "Design System/Regions/Hero",
  argTypes: {
    navbar: {
      control: "select",
      options: ["centered", "spaced", "start", "end", "stacked"],
    },
  },
  // decorators: [
  //   (story) => html`<div style="inline-size: 75vw">${story()}</div>`,
  // ],
};

export const Left = ({ navbar }) => leftHero(navbar);
export const Right = ({ navbar }) => rightHero(navbar);
export const SplitLeft = ({ navbar }) => splitLeftHero(navbar);
export const SplitRight = ({ navbar }) => splitRightHero(navbar);
export const AngledTopLeft = ({ navbar }) => angledTopLeftHero(navbar);
export const AngledTopRight = ({ navbar }) => angledTopRightHero(navbar);
export const AngledBottomLeft = ({ navbar }) => angledBottomLeftHero(navbar);
export const AngledBottomRight = ({ navbar }) => angledBottomRightHero(navbar);
export const Tiles2Left = ({ navbar }) => tiles2LeftHero(navbar);
export const Tiles2Right = ({ navbar }) => tiles2RightHero(navbar);
export const Tiles3Left = ({ navbar }) => tiles3LeftHero(navbar);
export const Tiles3Right = ({ navbar }) => tiles3RightHero(navbar);
export const CenterImage = ({ navbar }) => centerImageHero(navbar);
export const LeftBg = ({ navbar }) => leftBgHero(navbar);
export const CenterBg = ({ navbar }) => centerBgHero(navbar);
export const RightBg = ({ navbar }) => rightBgHero(navbar);
export const LeftGradient = ({ navbar }) => leftGradientHero(navbar);
export const CenterGradient = ({ navbar }) => centerGradientHero(navbar);
export const RightGradient = ({ navbar }) => rightGradientHero(navbar);
