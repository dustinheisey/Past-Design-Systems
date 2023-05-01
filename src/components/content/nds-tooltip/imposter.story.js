import { html } from "lit";

export default {
  title: "Layouts/Tooltip",
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["top", "right", "bottom", "left"],
      },
    },
  },
  args: {
    direction: "top",
  },
};

export const Default = ({ direction }) =>
  html`
    <div class="tooltip ${direction}" tooltip="${direction} tooltip">
      show ${direction}
    </div>
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
