import { html } from "lit";
import "./nds-rating.js";

export default {
  title: "Components/Input/Rating",
  component: "ds-rating",
};

export const Default = () => html` <nds-rating></nds-rating> `;

export const WithValue = () => html` <nds-rating value="3"></nds-rating> `;

export const Disabled = () => html` <nds-rating disabled></nds-rating> `;

export const CustomIcons = () => html`
  <nds-rating empty-icon="far fa-star" filled-icon="fas fa-star"></nds-rating>
`;
