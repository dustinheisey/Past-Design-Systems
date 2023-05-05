import { html } from "lit";
import "./dark-mode.js";

export default {
  title: "Components/Input/Dark Mode Toggle",
  decorators: [
    (story) =>
      html`<div
        style="width: 50vw; height: 50vh; background: var(--color-background); display: grid; place-items: center;"
      >
        ${story()}
      </div>`,
  ],
};

export const Default = () => html`<nds-dark-mode></nds-dark-mode>`;
