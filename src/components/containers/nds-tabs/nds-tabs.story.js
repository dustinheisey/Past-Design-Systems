import { html } from "lit";
import "./nds-tabs.js";

export default {
  title: "Components/Containers/Tabs",
  component: "ds-tabs",
};

export const Default = () =>
  html`
    <nds-tabs>
      <button slot="tab">Tab 1</button>
      <div slot="panel">Content for Tab 1</div>
      <button slot="tab">Tab 2</button>
      <div slot="panel">Content for Tab 2</div>
      <button slot="tab">Tab 3</button>
      <div slot="panel">Content for Tab 3</div>
    </nds-tabs>
  `;
