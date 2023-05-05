import {
  centeredContact,
  splitLeftContact,
  splitRightContact,
} from "./contact.js";

export default {
  title: "Regions/Contact",
};

export const Centered = () => centeredContact;
export const SplitLeft = () => splitLeftContact;
export const SplitRight = () => splitRightContact;
