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
      options: ["simple", "underline"],
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

export const SimpleTextArea = () => html`
  <label>Textarea Label</label>
  <textarea class="textarea" placeholder="Simple textarea"></textarea>
`;

SimpleTextArea.parameters = {
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

export const UnderlineTextArea = () => html`
  <label>Textarea Label</label>
  <textarea
    class="textarea-underline"
    placeholder="Underline textarea"
  ></textarea>
`;

UnderlineTextArea.parameters = {
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
