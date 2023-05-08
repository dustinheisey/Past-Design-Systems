import { html } from "lit";

export default {
  title: "Design System/Elements/Label",
  argTypes: {
    required: {
      control: "boolean",
      description: "Input Required?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Default = ({ required }) =>
  html` <label class="${required ? "required" : ""}">Input Label</label> `;

export const Required = () =>
  html` <label class="required">Input Label</label> `;

export const Optional = () => html` <label>Input Label</label> `;
