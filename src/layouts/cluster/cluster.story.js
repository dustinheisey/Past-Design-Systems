import { html } from "lit";

export default {
  title: "Layouts/Cluster",
};

export const Default = () =>
  html`
    <ul class="cluster">
      <a href="#" class="link link-navigation">Link 1</a>
      <a href="#" class="link link-navigation">Link 2</a>
      <a href="#" class="link link-navigation">Link 3</a>
      <a href="#" class="link link-navigation">Link 4</a>
    </ul>
  `;
