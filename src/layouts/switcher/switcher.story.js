import { html } from "lit";

export default {
  title: "Layouts/Switcher",
};

export const Default = () =>
  html`
    <div class="switcher switch-tablet gap">
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Quis elit dolor irure nulla magna elit deserunt esse. Laborum cillum
          sunt laborum aliquip duis consequat enim aliquip ex officia dolore
          minim. Velit ea ex eu aliqua laborum minim culpa laborum nisi labore.
        </p>
        <button class="btn">Add to Card</button>
      </div>
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Eiusmod incididunt voluptate cillum aliqua id mollit aliqua. Cillum
          qui culpa amet laborum id deserunt laboris excepteur in ullamco mollit
          eiusmod est adipisicing. Ut et irure esse labore ex mollit cupidatat
          elit enim in veniam culpa.
        </p>
        <button class="btn">Add to Card</button>
      </div>
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Eiusmod incididunt voluptate cillum aliqua id mollit aliqua. Cillum
          qui culpa amet laborum id deserunt laboris excepteur in ullamco mollit
          eiusmod est adipisicing. Ut et irure esse labore ex mollit cupidatat
          elit enim in veniam culpa.
        </p>
        <button class="btn">Add to Card</button>
      </div>
    </div>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Switcher is ideal for situations where elements should be considered equal and can be displayed in either horizontal or vertical layouts, such as card components or numbered step lists.",
    },
    source: {
      code: `
<div class="switcher switch-phone">
</div>
    `,
    },
  },
};
