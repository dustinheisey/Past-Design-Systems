import { html } from "lit";

export default {
  title: "Layouts/Split Screen",
};

export const Default = () =>
  html`
    <div class="split-screen start">
      <div class="left-section">
        <h1>{landing page title}</h1>
        <p>{landing page description}</p>
        <button>{call to action}</button>
      </div>
      <div class="right-section">
        <img src="https://placehold.co/600x400" alt="{landing page title}" />
      </div>
    </div>
  `;
