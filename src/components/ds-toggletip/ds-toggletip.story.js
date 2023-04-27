import { html } from "lit";
import "./ds-toggletip.js";

export default {
  title: "Components/Toggletip",
  component: "ds-toggletip",
};

export const Default = () =>
  html`
    <ds-toggletip>
      <button slot="toggle">Toggle</button>
      <div slot="content">Toggletip content goes here.</div>
    </ds-toggletip>
  `;
