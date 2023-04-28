import { html } from "lit";

export default {
  title: "Layouts/Drawer",
};

export const Default = () =>
  html`
    <div class="product-page">
      <h1>{product name}</h1>
      <p>{product description}</p>
      <button class="drawer-link">Product Details</button>
      <div class="drawer">
        <button class="close-btn">&times;</button>
        <div class="content">
          <h2>Product Details</h2>
          <p>{product details}</p>
        </div>
      </div>
    </div>
  `;
