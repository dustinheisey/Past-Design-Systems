import { computeLayout } from "./computeLayout.js";

export default {
  title: "Builders/Navigation Builder",
  argTypes: {
    navbar: {
      control: "select",
      options: ["spaced", "start", "centered", "end", "stacked"],
    },
  },
  args: {
    navbar: "spaced",
  },
};

export const Navbar = ({ navbar }) => computeLayout("navbar", navbar);
