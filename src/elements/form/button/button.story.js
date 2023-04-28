import { html } from "lit";
import "../../../components/prose/nds-icon/nds-icon.js";

export default {
  title: "Elements/Form/Button",
  argTypes: {
    variant: {
      control: "select",
      description: "Button Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary", "circular"],
    },
    label: {
      description: "Button Label",
      control: {
        type: "text",
      },
    },
    size: {
      control: "select",
      description: "Button Size",
      options: ["s", "m", "l"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
  },
  args: { variant: "primary", size: "m", label: "Button Label" },
};

export const Default = ({ variant, size, label }) =>
  html` <button class="btn btn-${variant} btn-${size}">${label}</button> `;

export const PrimaryButton = () => html`
  <div class="cluster gap-m">
    <button class="btn btn-s">Primary Button</button>
    <button class="btn">Primary Button</button>
    <button class="btn btn-l">Primary Button</button>
  </div>
`;

PrimaryButton.parameters = {
  docs: {
    description: {
      story:
        'Primary buttons should be used for the most important actions on a page or in a flow. They should be used sparingly to draw attention to the main action that you want users to take. Examples of primary button usage include "Submit", "Save", "Purchase", or "Sign Up".',
    },
    source: {
      code: `
<button class="btn">
    Primary Button
</button>
    `,
    },
  },
};

export const SecondaryButtons = () => html`
  <div class="cluster gap-m">
    <button class="btn btn-secondary btn-s">Secondary Button</button>
    <button class="btn btn-secondary btn-m">Secondary Button</button>
    <button class="btn btn-secondary btn-l">Secondary Button</button>
  </div>
`;

SecondaryButtons.parameters = {
  docs: {
    description: {
      story:
        'Secondary buttons should be used for actions that are important but not as important as primary actions. They should be used when you want to provide users with additional options that are relevant to the current context, but not the main focus of the page or flow. Examples of secondary button usage include "Cancel", "Back", or "Skip".',
    },
    source: {
      code: `
<button class="btn btn-secondary">
    Secondary Button
</button>
    `,
    },
  },
};

export const TertiaryButtons = () =>
  html`
    <div class="cluster gap-m">
      <button class="btn btn-tertiary btn-s">Tertiary Button</button>
      <button class="btn btn-tertiary btn-m">Tertiary Button</button>
      <button class="btn btn-tertiary btn-l">Tertiary Button</button>
    </div>
  `;

TertiaryButtons.parameters = {
  docs: {
    description: {
      story:
        'Tertiary buttons should be used for actions that are not as important as primary or secondary actions, but still relevant to the current context. They should be used when you want to provide users with more options that are less important or less frequently used. Examples of tertiary button usage include "Learn More", "View Details", or "Filter".',
    },
    source: {
      code: `
<button class="btn btn-tertiary">
    Tertiary Button
</button>
    `,
    },
  },
};

export const CircularButtons = () => html`
  <div class="cluster gap-m">
    <button class="btn btn-circular btn-s">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-circular btn-m">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-circular btn-l">
      <nds-icon name="contact" type="fill"></nds-icon>
    </button>
  </div>
`;

CircularButtons.parameters = {
  docs: {
    description: {
      story:
        'Circular buttons should be used for actions that require less attention or have less importance than other types of buttons. They should be used when you want to provide users with quick access to actions that are frequently used or secondary to the main actions on the page or in the flow. Examples of circular button usage include "Add", "Delete", or "Edit". On mobile, a large circular button should be placed to the bottom right corner of the screen with the primary action of the website.',
    },
    source: {
      code: `
<button class="btn btn-circular">
    <nds-icon
        name="contact"
        type="fill"
    ></nds-icon>
</button>
    `,
    },
  },
};

export const IconLeftButtons = () => html`
  <div class="cluster gap-m">
    <button class="btn">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
      Button with Icon
    </button>
    <button class="btn btn-secondary">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
      Button with Icon
    </button>
    <button class="btn btn-tertiary">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
      Button with Icon
    </button>
  </div>
`;

export const IconRightButtons = () => html`
  <div class="cluster gap-m">
    <button class="btn">
      Button with Icon
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-secondary">
      Button with Icon
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-tertiary">
      Button with Icon
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
  </div>
`;

export const IconButtons = () => html`
  <div class="cluster gap-m">
    <button class="btn">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-secondary">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
    <button class="btn btn-tertiary">
      <nds-icon name="contact" type="fill" size="s"></nds-icon>
    </button>
  </div>
`;