import { html } from "lit";
import {
  header,
  hero,
  portfolio,
  testimonial,
  cta,
  computeLayout,
} from "../../util/layouts.js";

export default {
  title: "Builders/Portfolio Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header, ...hero],
    },
    grid: {
      control: "select",
      options: [...portfolio],
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

export const Default = ({ header, grid, testimonials, cta }) =>
  html`
    ${computeLayout(header)} ${computeLayout(grid)}
    ${computeLayout(testimonials)} ${computeLayout(cta)}
  `;
