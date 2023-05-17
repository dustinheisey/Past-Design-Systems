import { html } from "lit";

export default {
  title: "Design System/Layouts/Inline",
};

export const Default = () =>
  html`
    <ul class="stack gap-xs">
      <li class="inline">
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        <span>Product Features</span>
      </li>
      <li class="inline">
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        <span>Product Features</span>
      </li>
      <li class="inline">
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
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
