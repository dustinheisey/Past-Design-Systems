import { html } from "lit";
import "./ds-rating.js";

export default {
  title: "Components/Rating",
  component: "ds-rating",
};

export const Default = () => html` <ds-rating></ds-rating> `;

export const WithValue = () => html` <ds-rating value="3"></ds-rating> `;

export const Disabled = () => html` <ds-rating disabled></ds-rating> `;

export const CustomIcons = () => html`
  <ds-rating empty-icon="far fa-star" filled-icon="fas fa-star"></ds-rating>
`;
