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
};

export const Left = () => leftHero;
export const Right = () => rightHero;
export const SplitLeft = () => splitLeftHero;
export const SplitRight = () => splitRightHero;
export const AngledTopLeft = () => angledTopLeftHero;
export const AngledTopRight = () => angledTopRightHero;
export const AngledBottomLeft = () => angledBottomLeftHero;
export const AngledBottomRight = () => angledBottomRightHero;
export const Tiles2Left = () => tiles2LeftHero;
export const Tiles2Right = () => tiles2RightHero;
export const Tiles3Left = () => tiles3LeftHero;
export const Tiles3Right = () => tiles3RightHero;
export const CenterImage = () => centerImageHero;
export const LeftBg = () => leftBgHero;
export const CenterBg = () => centerBgHero;
export const RightBg = () => rightBgHero;
export const LeftGradient = () => leftGradientHero;
export const CenterGradient = () => centerGradientHero;
export const RightGradient = () => rightGradientHero;
