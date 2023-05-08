import { html } from "lit";
import {
  header,
  hero,
  info,
  stats,
  portfolio,
  testimonial,
  cta,
  computeLayout,
} from "../../util/layouts.js";

/*
- dont make it about you
- keep it short

- header [header/heroLayouts]
- introduction paragraph with personal relatable microstory to build connection. second paragraph linking it back to services and why its good for your customer [infoLayouts]
- skills & expertise
- portfolio samples [portfolioLayouts]
- testimonials [testimonialLayouts]
- cta [ctaLayouts]
*/
export default {
  title: "Builders/About Builder",
  argTypes: {
    header: {
      control: "select",
      name: "Header",
      type: { name: "string", required: false },
      defaultValue: header[0],
      description: "demo description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: header[0] },
      },
      options: [...header, ...hero],
    },
    story: {
      control: "select",
      name: "Story",
      type: { name: "string", required: false },
      defaultValue: info[0],
      description: "demo description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: info[0] },
      },
      options: [...info],
    },
    skills: {
      control: "select",
      options: [...stats],
    },
    portfolio: {
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
  args: {
    header: header[0],
    story: info[0],
    skills: stats[0],
    portfolio: portfolio[0],
    testimonials: testimonial[0],
    cta: cta[0],
  },
};

export const Default = ({
  header,
  story,
  skills,
  portfolio,
  testimonials,
  cta,
}) =>
  html`
    ${computeLayout(header)} ${computeLayout(story)} ${computeLayout(skills)}
    ${computeLayout(portfolio)} ${computeLayout(testimonials)}
    ${computeLayout(cta)}
  `;
