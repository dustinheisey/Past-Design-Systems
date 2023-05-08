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
  title: "Design System/Regions/Header",
  argTypes: {
    navbar: {
      control: "select",
      options: ["center", "spaced", "start", "end", "stacked"],
    },
  },
};

export const Left = () => leftHeader;
export const Right = () => rightHeader;
export const LeftImage = () => leftImageHeader;
export const RightImage = () => rightImageHeader;
export const Center = () => centerHeader;
export const LeftInverse = () => leftInverseHeader;
export const RightInverse = () => rightInverseHeader;
export const LeftImageInverse = () => leftImageInverseHeader;
export const RightImageInverse = () => rightImageInverseHeader;
export const CenterInverse = () => centerInverseHeader;
