import { html } from "lit";
import "../../components/content/nds-icon/nds-icon.js";

export default {
  title: "Layouts/Inline",
};

export const Default = () =>
  html`
    <ul class="stack gap-xs">
      <li class="inline">
        <nds-icon name="accessibility" type="fill"></nds-icon>
        <span>Product Features</span>
      </li>
      <li class="inline">
        <nds-icon name="accessibility" type="fill"></nds-icon>
        <span>Product Features</span>
      </li>
      <li class="inline">
        <nds-icon name="accessibility" type="fill"></nds-icon>

        <span>Product Features</span>
      </li>
    </ul>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "Use the Inline component when you want to display elements in a horizontal line with adjustable alignment and spacing.",
    },
    source: {
      code: `
<div class="inline">
</div>
    `,
    },
  },
};
