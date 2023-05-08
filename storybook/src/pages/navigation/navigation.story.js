import { html } from "lit";
import { navbar, computeLayout } from "../../util/layouts.js";

export default {
  title: "Builders/Navigation Builder",
  argTypes: {
    navbar: {
      control: "select",
      options: [...navbar],
    },
  },
  args: {
    navbar: "spacedNavbar",
  },
};

export const Default = ({ navbar }) => html`${computeLayout(navbar)}`;
