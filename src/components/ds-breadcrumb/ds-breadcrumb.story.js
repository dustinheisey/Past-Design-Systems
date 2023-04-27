import { html } from "lit";
import "./ds-breadcrumb.js";

export default {
  title: "Components/Breadcrumb",
  component: "ds-breadcrumb",
};

export const Default = () =>
  html`
    <ds-breadcrumb>
      <a href="#">Home</a>
      <a href="#">Category</a>
      <span>Current Page</span>
    </ds-breadcrumb>
  `;
