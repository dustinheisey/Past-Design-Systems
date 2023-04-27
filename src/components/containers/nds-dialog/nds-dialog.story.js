import { html } from "lit";
import "./nds-dialog.js";

export default {
  title: "Components/Containers/Dialog",
  component: "ds-dialog",
};

export const Default = () =>
  html`
    <nds-dialog>
      <h2 slot="title">Dialog Title</h2>
      <div slot="content">Content goes here.</div>
      <button slot="primary-action">Save</button>
      <button slot="secondary-action">Cancel</button>
    </nds-dialog>
  `;
