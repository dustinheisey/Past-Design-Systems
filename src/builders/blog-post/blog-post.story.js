import { html } from "lit";
import { header, hero, content, cta } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/Blog Post Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header, ...hero],
    },
    content: {
      control: "select",
      options: [...content],
    },
    cta: {
      control: "select",
      options: [...cta],
    },
  },
};

export const Default = ({ header, content, cta }) =>
  html`
    ${computeLayout(header)} ${computeLayout(content)} ${computeLayout(cta)}
  `;
