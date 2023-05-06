import {
  leftImageFeature,
  rightImageFeature,
  cardGridFeature,
  blurbGridFeature,
  offsetGridFeature,
  offsetListFeature,
  listFeature,
} from "./feature.js";

export default {
  title: "Design System/Regions/Feature",
};

export const LeftImage = () => leftImageFeature;
export const RightImage = () => rightImageFeature;
export const CardGrid = () => cardGridFeature;
export const BlurbGrid = () => blurbGridFeature;
export const OffsetGrid = () => offsetGridFeature;
export const OffsetList = () => offsetListFeature;
export const List = () => listFeature;
