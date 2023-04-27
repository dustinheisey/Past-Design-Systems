import { html } from "lit";

export default {
  title: "Elements/Form/Range",
};

export const Default = () => html`
  <label for="budget">
    <span class="required">Budget</span>
    <div class="flex" gap="2xs">
      <input
        type="range"
        id="budget"
        name="budget"
        min="500"
        max="10000"
        step="500"
        value="500"
        required
      />
      <output id="budget-value">$500</output>
    </div>
  </label>
`;
