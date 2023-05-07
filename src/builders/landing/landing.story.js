import { html } from "lit";
import { hero, info, testimonial, cta, process, timeline } from "../layouts.js";
import { computeLayout } from "../computeLayout.js";

export default {
  title: "Builders/Landing Builder",
  argTypes: {
    hero: {
      control: "select",
      options: [...hero],
    },
    problem: {
      control: "select",
      options: [...info],
    },
    guide: {
      control: "select",
      options: [...info],
    },
    plan: {
      control: "select",
      options: [...info, ...process, ...timeline],
    },
    cta: {
      control: "select",
      options: [...cta],
    },
    success: {
      control: "select",
      options: [...testimonial],
    },
    freebie: {
      control: "select",
      options: [...cta],
    },
  },
};

export const Default = ({
  hero,
  problem,
  guide,
  plan,
  cta,
  success,
  freebie,
}) =>
  html`
    ${computeLayout(hero)} ${computeLayout(problem)} ${computeLayout(guide)}
    ${computeLayout(plan)} ${computeLayout(cta)} ${computeLayout(success)}
    ${computeLayout(freebie)}
  `;
