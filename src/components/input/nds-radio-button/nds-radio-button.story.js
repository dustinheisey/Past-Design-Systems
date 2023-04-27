import { html } from "lit";
import "./nds-radio-button.js";

export default {
  title: "Components/Input/Radio Button",
  component: "ds-radio-button",
};

export const Default = () =>
  html`
    <nds-radio-button>
      <label slot="label">Option 1</label>
      <input type="radio" name="options" slot="input" />
    </nds-radio-button>
    <nds-radio-button>
      <label slot="label">Option 2</label>
      <input type="radio" name="options" slot="input" />
    </nds-radio-button>
    <nds-radio-button>
      <label slot="label">Option 3</label>
      <input type="radio" name="options" slot="input" />
    </nds-radio-button>
  `;
