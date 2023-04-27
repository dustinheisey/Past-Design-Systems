import { html } from "lit";

export default {
  title: "Elements/Text/Badge",
};

// Badges
export const Badges = () => html`
  <div class="cluster">
    <span class="badge">Badge Text</span>
    <span class="badge badge-primary">Badge Text</span>
    <span class="badge badge-accent-1">Badge Text</span>
    <span class="badge badge-accent-2">Badge Text</span>
    <span class="badge badge-success">Badge Text</span>
    <span class="badge badge-info">Badge Text</span>
    <span class="badge badge-warning">Badge Text</span>
    <span class="badge badge-danger">Badge Text</span>
  </div>
`;

// Badges with status
export const BadgesWithStatus = () => html`
  <div class="cluster">
    <span class="badge status">Badge Text</span>
    <span class="badge badge-primary status">Badge Text</span>
    <span class="badge badge-accent-1 status">Badge Text</span>
    <span class="badge badge-accent-2 status">Badge Text</span>
    <span class="badge badge-success status">Badge Text</span>
    <span class="badge badge-info status">Badge Text</span>
    <span class="badge badge-warning status">Badge Text</span>
    <span class="badge badge-danger status">Badge Text</span>
  </div>
`;

// Flat badges
export const FlatBadges = () => html`
  <div class="cluster">
    <span class="badge badge-flat">Badge Text</span>
    <span class="badge badge-flat badge-primary">Badge Text</span>
    <span class="badge badge-flat badge-accent-1">Badge Text</span>
    <span class="badge badge-flat badge-accent-2">Badge Text</span>
    <span class="badge badge-flat badge-success">Badge Text</span>
    <span class="badge badge-flat badge-info">Badge Text</span>
    <span class="badge badge-flat badge-warning">Badge Text</span>
    <span class="badge badge-flat badge-danger">Badge Text</span>
  </div>
`;

// Flat badges with status dot
export const FlatBadgesWithStatusDot = () => html`
  <div class="cluster">
    <span class="badge badge-flat status">Badge Text</span>
    <span class="badge badge-flat badge-primary status">Badge Text</span>
    <span class="badge badge-flat badge-accent-1 status">Badge Text</span>
    <span class="badge badge-flat badge-accent-2 status">Badge Text</span>
    <span class="badge badge-flat badge-success status">Badge Text</span>
    <span class="badge badge-flat badge-info status">Badge Text</span>
    <span class="badge badge-flat badge-warning status">Badge Text</span>
    <span class="badge badge-flat badge-danger status">Badge Text</span>
  </div>
`;
