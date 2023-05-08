import { html } from "lit";
import { footer, computeLayout } from "../../util/layouts.js";

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
