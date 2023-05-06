import {
  centeredContact,
  splitLeftContact,
  splitRightContact,
} from "./contact.js";

export default {
  title: "Design System/Regions/Contact",
};

export const Centered = () => centeredContact;
export const SplitLeft = () => splitLeftContact;
export const SplitRight = () => splitRightContact;
