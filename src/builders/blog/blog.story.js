import { html } from "lit";
import { header, hero, blog, cta } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/Blog Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header, ...hero],
    },
    grid: {
      control: "select",
      options: [...blog],
    },
    cta: {
      control: "select",
      options: [...cta],
    },
  },
};

export const Default = ({ header }) => html` ${computeLayout(header)} `;
