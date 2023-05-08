import { html } from "lit";
import { error, computeLayout } from "../../util/layouts.js";

export default {
  title: "Builders/404 Builder",
  argTypes: {
    error: {
      control: "select",
      options: [...error],
    },
  },
  args: {
    error: "simple404",
  },
};

export const Default = ({ error }) => html`${computeLayout(error)}`;
