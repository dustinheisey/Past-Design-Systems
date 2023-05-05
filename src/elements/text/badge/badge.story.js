import { html } from "lit";

export default {
  title: "Elements/Text/Badge",
};

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
