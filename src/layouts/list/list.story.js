import { html } from "lit";

export default {
  title: "Layouts/List",
};

export const Default = () =>
  html`
    <ul class="list max-content">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ul>
  `;
