import { html } from "lit";

export default {
  title: "Layouts/Switcher",
};

export const Default = () =>
  html`
    <div class="switcher">
      <div class="product">
        <img src="https://placehold.co/600x400" alt="{product name}" />
        <h3>{product name}</h3>
        <p>{product description}</p>
        <button>{add to cart}</button>
      </div>
      <div class="product">
        <img src="https://placehold.co/600x400" alt="{product name}" />
        <h3>{product name}</h3>
        <p>{product description}</p>
        <button>{add to cart}</button>
      </div>
      <div class="product">
        <img src="https://placehold.co/600x400" alt="{product name}" />
        <h3>{product name}</h3>
        <p>{product description}</p>
        <button>{add to cart}</button>
      </div>
    </div>
  `;
