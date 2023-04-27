import { html } from "lit";

export default {
  title: "Components/Form/Fieldset",
  tags: ["autodocs"],
};

export const Fieldset = () => html`
  <form>
    <fieldset>
      <legend>Enter your name:</legend>
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name" /><br />
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last-name" /><br />
    </fieldset>
  </form>
`;
