import { html } from "lit";
import "./nds-breadcrumb.js";

export default {
  title: "Components/Navigation/Breadcrumb",
  component: "ds-breadcrumb",
};

export const Default = () =>
  html`
    <nds-breadcrumb>
      <a href="#">Home</a>
      <a href="#">Category</a>
      <span>Current Page</span>
    </nds-breadcrumb>
  `;
