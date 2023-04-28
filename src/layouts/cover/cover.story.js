import { html } from "lit";

export default {
  title: "Layouts/Cover",
};

export const Default = () =>
  html`
    <div class="cover">
      <img src="https://placehold.co/600x400" alt="Website hero image" />
      <div>
        <h1>Welcome to our new website!</h1>
        <p>Discover how our {product/service} can {benefit}.</p>
        <button>Get started</button>
      </div>
    </div>
  `;
