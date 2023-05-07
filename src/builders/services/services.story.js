import { html } from "lit";
import { header, hero, info, testimonial, cta } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/Services Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header, ...hero],
    },
    introduction: {
      control: "select",
      options: [...info],
    },
    service1: {
      control: "select",
      options: [...info, cta],
    },
    service2: {
      control: "select",
      options: [...info, cta],
    },
    service3: {
      control: "select",
      options: [...info, cta],
    },
    service4: {
      control: "select",
      options: [...info, cta],
    },
    testimonials: {
      control: "select",
      options: [...testimonial],
    },
    cta: {
      control: "select",
      options: [...cta],
    },
  },
};

export const Default = ({
  header,
  introduction,
  service1,
  service2,
  service3,
  service4,
  testimonials,
  cta,
}) =>
  html`
    ${computeLayout(header)} ${computeLayout(introduction)}
    ${computeLayout(service1)} ${computeLayout(service2)}
    ${computeLayout(service3)} ${computeLayout(service4)}
    ${computeLayout(testimonials)} ${computeLayout(cta)}
  `;
