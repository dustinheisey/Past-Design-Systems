import { html } from "lit";
import { computeLayout } from "./computeLayout.js";

export default {
  title: "Builders/404 Builder",
  argTypes: {
    layout: {
      control: "select",
      options: ["simple", "splitWithImage", "bgImage"],
    },
  },
};

export const Default = ({ layout }) => html` ${computeLayout("404", layout)} `;
