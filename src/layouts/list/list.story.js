import { html } from "lit";
import "../../components/content/nds-icon/nds-icon.js";

export default {
  title: "Layouts/List",
  decorators: [
    (story) =>
      html`<div style="inline-size: 50vw; margin: auto;">${story()}</div>`,
  ],
};

export const Default = () =>
  html`
    <ul class="list">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ul>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Center component should be used whenever you want something to be horizontally centered. Use by default to center the container, or use the intrinsic modifier to center the content within the centered container.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};

export const OL = () =>
  html`
    <ol class="list list-marker">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ol>
  `;

export const Ul = () =>
  html`
    <ul class="list list-marker">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ul>
  `;

export const SVG = () =>
  html`
    <ul class="list list-marker">
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        Product Features
      </li>
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        Customer Reviews
      </li>
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        FAQs
      </li>
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        Contact Information
      </li>
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        Shipping and Returns
      </li>
      <li>
        <nds-icon
          name="accessibility"
          color="var(--color-accent1-ui)"
          type="fill"
        ></nds-icon>
        Terms and Conditions
      </li>
    </ul>
  `;
