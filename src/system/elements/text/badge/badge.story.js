import { html } from "lit";

export default {
  title: "Design System/Elements/Text/Badge",
  argTypes: {
    type: {
      control: "select",
      description: "Badge Type",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary"],
    },
  },
  args: { type: "primary" },
};

export const Default = ({ type }) => html`
  <span class="badge badge-${type}">Badge Text</span>
`;

// Badges
export const Badges = () => html`
  <div class="cluster">
    <span class="badge badge-primary">Badge Text</span>
    <span class="badge badge-secondary">Badge Text</span>
    <span class="badge badge-tertiary">Badge Text</span>
  </div>
`;

// Badges with status
export const BadgesWithStatus = () => html`
  <div class="cluster">
    <span class="badge badge-primary status">Badge Text</span>
    <span class="badge badge-secondary status">Badge Text</span>
    <span class="badge badge-tertiary status">Badge Text</span>
  </div>
`;

export const PrimaryBadge = () => html`
  <span class="badge badge-primary">Badge Text</span>
`;

export const SecondaryBadge = () => html`
  <span class="badge badge-secondary">Badge Text</span>
`;

export const TertiaryBadge = () => html`
  <span class="badge badge-tertiary">Badge Text</span>
`;

export const PrimaryBadgeWithStatus = () => html`
  <span class="badge badge-primary status">Badge Text</span>
`;

export const SecondaryBadgeWithStatus = () => html`
  <span class="badge badge-secondary status">Badge Text</span>
`;

export const TertiaryBadgeWithStatus = () => html`
  <span class="badge badge-tertiary status">Badge Text</span>
`;
