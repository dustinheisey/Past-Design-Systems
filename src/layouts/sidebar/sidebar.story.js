import { html } from "lit";

export default {
  title: "Layouts/Sidebar",
};

export const Default = () =>
  html`
    <div class="with-sidebar">
      <div class="product-details">
        <h1>{product title}</h1>
        <img src="https://placehold.co/600x400" alt="{product title}" />
        <p>{product description}</p>
      </div>
      <div class="product-sidebar">
        <h2>Additional Information</h2>
        <ul>
          <li>Dimensions: {product dimensions}</li>
          <li>Weight: {product weight}</li>
          <li>Materials: {product materials}</li>
          <li>Country of Origin: {product origin}</li>
        </ul>
      </div>
    </div>
  `;
