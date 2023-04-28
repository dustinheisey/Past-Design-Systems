import { html } from "lit";

export default {
  title: "Layouts/Reel",
};

export const Default = () =>
  html`
    <nav class="reel">
      <a href="{home link}">
        <img src="https://placehold.co/600x400" alt="Home" />
      </a>
      <a href="{about link}">
        <img src="https://placehold.co/600x400" alt="About" />
      </a>
      <a href="{services link}">
        <img src="https://placehold.co/600x400" alt="Services" />
      </a>
      <a href="{portfolio link}">
        <img src="https://placehold.co/600x400" alt="Portfolio" />
      </a>
      <a href="{contact link}">
        <img src="https://placehold.co/600x400" alt="Contact" />
      </a>
    </nav>
  `;
