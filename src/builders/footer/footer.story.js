import { html } from "lit";
import { footer } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/Footer Builder",
  argTypes: {
    footer: {
      control: "select",
      options: [...footer],
    },
  },
  args: {
    footer: "inlinePrimaryFooter",
  },
};

export const Default = ({ footer }) => html`${computeLayout(footer)}`;
