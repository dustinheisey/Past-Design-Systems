import { html } from "lit";
import "./nds-popover.js";

export default {
  title: "Components/Containers/Popover",
  component: "ds-popover",
};

export const Default = () =>
  html`
    <button id="popover-btn" aria-haspopup="true" aria-expanded="false">
      Show Popover
    </button>
    <nds-popover for="popover-btn">
      <h2 slot="title">Popover Title</h2>
      <div slot="content">Popover content goes here.</div>
    </nds-popover>
  `;
