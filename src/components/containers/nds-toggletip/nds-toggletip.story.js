import { html } from "lit";
import "./nds-toggletip.js";

export default {
  title: "Components/Containers/Toggletip",
  component: "ds-toggletip",
};

export const Default = () =>
  html`
    <nds-toggletip>
      <button slot="toggle">Toggle</button>
      <div slot="content">Toggletip content goes here.</div>
    </nds-toggletip>
  `;
