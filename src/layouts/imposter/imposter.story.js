import { html } from "lit";

export default {
  title: "Layouts/Imposter",
};

export const Default = () =>
  html`
    <div class="imposter contain" style="--margin: 20px;">
      <img src="https://placehold.co/600x400" alt="Product design" />
    </div>
  `;
