import { html } from "lit";
// import "./range.js";

export default {
  title: "Elements/Form/Range",
};

export const Default = () => html`
  <script>
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    budgetInput.addEventListener("input", function () {
      budgetValue.textContent = "$" + budgetInput.value;
    });
  </script>
  <label for="budget">
    <span class="required">Budget</span>
    <div class="inline" gap="2xs">
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
