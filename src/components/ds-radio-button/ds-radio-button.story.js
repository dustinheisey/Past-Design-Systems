import { html } from "lit";
import "./ds-radio-button.js";

export default {
  title: "Components/Radio Button",
  component: "ds-radio-button",
};

export const Default = () =>
  html`
    <ds-radio-button>
      <label slot="label">Option 1</label>
      <input type="radio" name="options" slot="input" />
    </ds-radio-button>
    <ds-radio-button>
      <label slot="label">Option 2</label>
      <input type="radio" name="options" slot="input" />
    </ds-radio-button>
    <ds-radio-button>
      <label slot="label">Option 3</label>
      <input type="radio" name="options" slot="input" />
    </ds-radio-button>
  `;
