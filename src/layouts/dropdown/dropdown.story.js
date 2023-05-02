import { html } from "lit";

export default {
  title: "Layouts/Dropdown",
};

export const Default = {
  render: () => html` <drop-down>
    <a href="#" class="link link-navigation">Services</a>
    <ul>
      <li><a href="#" class="link link-navigation">Branding</a></li>
      <li><a href="#" class="link link-navigation">Web Design</a></li>
      <li><a href="#" class="link link-navigation">Optimization</a></li>
      <li><a href="#" class="link link-navigation">Maintenance</a></li>
    </ul>
  </drop-down>`,
};
