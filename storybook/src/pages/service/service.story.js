import { html } from "lit";
import {
  header,
  hero,
  info,
  stats,
  portfolio,
  testimonial,
  cta,
  process,
  timeline,
  pricing,
  faq,
  computeLayout,
} from "../../util/layouts.js";

export default {
  title: "Builders/Service Builder",
  argTypes: {
    header: {
      control: "select",
      options: [...header, ...hero],
    },
    problem: {
      control: "select",
      options: [...info],
    },
    description: {
      control: "select",
      options: [...info],
    },
    proof: {
      control: "select",
      options: [...testimonial, ...stats, ...portfolio],
    },
    process: {
      control: "select",
      options: [...process, ...timeline],
    },
    packages: {
      control: "select",
      options: [...pricing],
    },
    transformation: {
      control: "select",
      options: [...info],
    },
    faq: {
      control: "select",
      options: [...faq],
    },
    ctaGuarantee: {
      control: "select",
      options: [...cta],
    },
  },
};

export const Default = ({
  header,
  problem,
  description,
  proof,
  process,
  packages,
  transformation,
  faq,
  ctaGuarantee,
}) =>
  html`
    ${computeLayout(header)} ${computeLayout(problem)}
    ${computeLayout(description)} ${computeLayout(proof)}
    ${computeLayout(process)} ${computeLayout(packages)}
    ${computeLayout(transformation)} ${computeLayout(faq)}
    ${computeLayout(ctaGuarantee)}
  `;
