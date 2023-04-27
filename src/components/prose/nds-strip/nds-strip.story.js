import { html } from "lit";
import "./nds-strip.js";

export default {
  title: "Components/Prose/Strip",
  component: "ds-strip",
};

export const Default = () =>
  html`
    <nds-strip>
      <div slot="content">Card 1</div>
      <div slot="content">Card 2</div>
      <div slot="content">Card 3</div>
    </nds-strip>
  `;
