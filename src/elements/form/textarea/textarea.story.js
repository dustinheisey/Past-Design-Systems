import { html } from "lit";

export default {
  title: "Elements/Form/Textarea",
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
  },
  args: { variant: "simple" },
};

export const Default = ({ variant }) => html`
  <label>Input Label</label>
  <textarea
    class="${variant === "simple" ? "" : `textarea-${variant}`}"
  ></textarea>
`;

export const Simpletextarea = () => html`
  <label>Textarea Label</label>
  <textarea class="textarea" placeholder="Simple textarea"></textarea>
`;

Simpletextarea.parameters = {
  docs: {
    description: {
      story:
        "Simple textareas should be used for basic textarea fields where no additional emphasis or styling is required. They should be used for fields like email, username, or password textarea fields.",
    },
    source: {
      code: `
<textarea class="textarea" placeholder="Simple textarea"></textarea>
      `,
    },
  },
};

export const Filledtextarea = () => html`
  <label>Textarea Label</label>
  <textarea class="textarea-filled" placeholder="Filled textarea"></textarea>
`;

Filledtextarea.parameters = {
  docs: {
    description: {
      story:
        "Filled textareas should be used when the textarea field needs additional emphasis or when the textarea field is being used in a dark mode interface. They should be used for fields like search, filter, or date textarea fields.",
    },
    source: {
      code: `
<textarea class="textarea-filled" placeholder="Filled textarea"></textarea>
      `,
    },
  },
};

export const Underlinetextarea = () => html`
  <label>Textarea Label</label>
  <textarea
    class="textarea-underline"
    placeholder="Underline textarea"
  ></textarea>
`;

Underlinetextarea.parameters = {
  docs: {
    description: {
      story:
        "Underline textareas should be used when the textarea field needs additional emphasis, but a solid fill or outline is not desired. They should be used for fields like website URL, phone number, or address textarea fields.",
    },
    source: {
      code: `
<textarea class="textarea-underline" placeholder="Underline textarea"></textarea>
      `,
    },
  },
};
