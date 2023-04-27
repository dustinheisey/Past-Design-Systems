import "./nds-dropdown.js";
import { html } from "lit";

export default {
  title: "Components/Containers/Dropdown",
  component: "ds-dropdown",
};

export const Default = {
  render: () => html`<nav aria-label="Main Navigation">
    <ul>
      <li><a href="#">About</a></li>
      <li class="dropdown">
        <!-- aria-expanded needs managed with Javascript -->
        <button
          type="button"
          class="dropdown__title"
          aria-expanded="false"
          aria-controls="sweets-dropdown"
        >
          Sweets
        </button>
        <ul class="dropdown__menu" id="sweets-dropdown">
          <li><a href="#">Donuts</a></li>
          <li><a href="#">Cupcakes</a></li>
          <li><a href="#">Chocolate</a></li>
          <li><a href="#">Bonbons</a></li>
        </ul>
      </li>
      <li><a href="#">Order</a></li>
    </ul>
  </nav>`,
};
