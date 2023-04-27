import { html } from "lit";
import "./nds-banner.js";

export default {
  title: "Components/Containers/Banner",
  component: "ds-banner",
};

export const Default = () =>
  html`
    <nds-banner>
      <h2 slot="title">New Feature!</h2>
      <p slot="content">
        Check out our latest feature that will make your life easier.
      </p>
      <button slot="action">Learn More</button>
      <button slot="dismiss">Dismiss</button>
    </nds-banner>
  `;
