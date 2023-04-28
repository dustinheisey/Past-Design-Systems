import { html } from "lit";

export default {
  title: "Layouts/Frame",
};

export const Default = () =>
  html`
    <div class="flex">
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="Lifestyle image" />
      </div>
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="Lifestyle image" />
      </div>
    </div>
  `;
