import { html } from "lit";

export default {
  title: "Layouts/Stack",
};

export const Default = () =>
  html`
    <div class="stack">
      <h1>{blog post title}</h1>
      <p>{blog post intro}</p>
      <hr />
      <p>{blog post section 1}</p>
      <hr />
      <p>{blog post section 2}</p>
      <hr />
      <p>{blog post conclusion}</p>
    </div>
  `;
