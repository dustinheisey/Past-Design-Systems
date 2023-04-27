import { html } from "lit";

export default {
  title: "Elements/Form/Select",
  argTypes: {
    variant: {
      control: "select",
      description: "Select Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "simple" },
      },
      options: ["simple", "filled", "underline"],
    },
  },
  args: { variant: "simple" },
};

export const Default = ({ variant }) =>
  html`<label for="fruit">Choose a fruit:</label>
    <select
      id="fruit"
      name="fruit"
      class="${variant === "simple" ? "" : `select-${variant}`}"
    >
      <optgroup label="Citrus">
        <option value="orange">Orange</option>
        <option value="grapefruit">Grapefruit</option>
      </optgroup>
      <optgroup label="Berry">
        <option value="strawberry">Strawberry</option>
        <option value="blueberry">Blueberry</option>
      </optgroup>
    </select>`;

export const Select = () =>
  html`
    <label for="fruit">Choose a fruit:</label>
    <select id="fruit" name="fruit">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
      <option value="grape">Grape</option>
    </select>
  `;

export const Underline = () =>
  html`
    <label for="fruit">Choose a fruit:</label>
    <select id="fruit" name="fruit" class="select-underline">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
      <option value="grape">Grape</option>
    </select>
  `;

export const Filled = () =>
  html`
    <label for="fruit">Choose a fruit:</label>
    <select id="fruit" name="fruit" class="select-filled">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
      <option value="grape">Grape</option>
    </select>
  `;
