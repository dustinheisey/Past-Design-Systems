import { html } from "lit";

export default {
  title: "Layouts/Center",
};

export const Default = () =>
  html`
    <div class="center">
      <p>
        Exercitation aute tempor laboris elit non sit minim pariatur mollit.
        Aliquip nulla ullamco enim ad cillum ea qui Lorem. Reprehenderit nulla
        ad culpa amet velit cupidatat. Amet consectetur veniam sint occaecat
        amet aliquip excepteur dolor id.
      </p>
    </div>
  `;

export const CTASectionStory = () =>
  html`<div class="center">
    <h2 class="region-headline">Start your free trial today</h2>
    <p>Experience the {product} difference for yourself</p>
    <button class="btn">Sign up now</button>
  </div>`;
