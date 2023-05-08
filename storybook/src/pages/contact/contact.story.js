import { html } from "lit";
import { header, contact, faq, computeLayout } from "../../util/layouts.js";

export default {
  title: "Builders/Contact Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header],
    },
    form: {
      control: "select",
      options: [...contact],
    },
    faq: {
      control: "select",
      options: [...faq],
    },
  },
};

export const Default = ({ header, form, faq }) =>
  html` ${computeLayout(header)} ${computeLayout(form)} ${computeLayout(faq)} `;
