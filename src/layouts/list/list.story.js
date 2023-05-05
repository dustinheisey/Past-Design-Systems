import { html } from "lit";

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
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Product Features
      </li>
      <li>
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Customer Reviews
      </li>
      <li>
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        FAQs
      </li>
      <li>
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Contact Information
      </li>
      <li>
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Shipping and Returns
      </li>
      <li>
        <svg>
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Terms and Conditions
      </li>
    </ul>
  `;
