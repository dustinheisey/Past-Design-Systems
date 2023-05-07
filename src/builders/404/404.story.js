import { html } from "lit";
import { error } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/404 Builder",
  argTypes: {
    error: {
      control: "select",
      options: [...error],
    },
  },
};

export const Default = ({ error }) => html`${computeLayout(error)}`;

export const Test = ({ error }) => html`${computeLayout(error)}`;
