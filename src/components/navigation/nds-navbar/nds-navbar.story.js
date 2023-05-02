import { html } from "lit";
import { navbar } from "./nds-navbar.js";

export default {
  title: "Components/Navigation/Navbar",
  argTypes: {
    layout: {
      name: "layout",
      control: {
        type: "select",
        options: ["start", "end", "center", "spaced"],
      },
    },
  },
};

export const Default = () => html`${navbar()}`;
