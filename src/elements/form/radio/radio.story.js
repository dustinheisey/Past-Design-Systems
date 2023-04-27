import { html } from "lit";
import "../../../components/ds-icon.js";

export default {
  title: "Elements/Form/Radio",
  argTypes: {
    variant: {
      control: "select",
      description: "Input Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "simple" },
      },
      options: ["simple", "filled", "underline"],
    },
    label: {
      description: "Input Label",
      control: {
        type: "text",
      },
    },
  },
  args: { variant: "simple", label: "Input Label" },
};

export const Default = ({ variant, label }) => {
  const inputClass = variant === "underline" ? "input-underline" : "input";

  return html`
    <label>${label}</label>
    <input class="${inputClass} ${inputClass}-${variant}" />
  `;
};

export const SimpleInput = () => html`
  <input class="input input-simple" placeholder="Simple Input" />
`;

SimpleInput.parameters = {
  docs: {
    description: {
      story:
        "Simple inputs should be used for basic input fields where no additional emphasis or styling is required. They should be used for fields like email, username, or password input fields.",
    },
    source: {
      code: `
<input class="input input-simple" placeholder="Simple Input" />
      `,
    },
  },
};

export const FilledInput = () => html`
  <input class="input input-filled" placeholder="Filled Input" />
`;

FilledInput.parameters = {
  docs: {
    description: {
      story:
        "Filled inputs should be used when the input field needs additional emphasis or when the input field is being used in a dark mode interface. They should be used for fields like search, filter, or date input fields.",
    },
    source: {
      code: `
<input class="input input-filled" placeholder="Filled Input" />
      `,
    },
  },
};

export const UnderlineInput = () => html`
  <input class="input input-underline" placeholder="Underline Input" />
`;

UnderlineInput.parameters = {
  docs: {
    description: {
      story:
        "Underline inputs should be used when the input field needs additional emphasis, but a solid fill or outline is not desired. They should be used for fields like website URL, phone number, or address input fields.",
    },
    source: {
      code: `
<input class="input input-underline" placeholder="Underline Input" />
      `,
    },
  },
};
