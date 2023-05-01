import { html } from "lit";

export default {
  title: "Layouts/Sidebar",
};

export const Default = () =>
  html`
    <div class="sidebar">
      <button class="btn fixed">Button Text</button>
      <input class="input" />
    </div>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Sidebar component is suitable for aligning media objects with their descriptions or aligning buttons with form inputs where the button forms the sidebar and has an intrinsic, content-based width.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};

export const SplitStart = () =>
  html`
    <div class="sidebar sidebar-split gap-m">
      <div class="frame photo">
        <img src="https://placehold.co/400x600" />
      </div>
      <div class="prose fixed">
        <h1>landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse. Nulla quis dolore minim magna do est consectetur eu anim aute.
        </p>
        <button class="btn">Call to Action</button>
      </div>
    </div>
  `;

export const SplitEnd = () =>
  html`
    <div class="sidebar sidebar-split gap-m">
      <div class="prose fixed">
        <h1>landing page title</h1>
        <p>
          Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
          sunt cillum exercitation anim dolor voluptate. Sunt in eu exercitation
          pariatur elit. Quis magna enim ut id irure est. Magna laborum non
          fugiat aute est quis duis incididunt. Ad sint eiusmod sint tempor
          esse. Nulla quis dolore minim magna do est consectetur eu anim aute.
        </p>
        <button class="btn">Call to Action</button>
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/400x600" />
      </div>
    </div>
  `;

export const SplitEndFull = () =>
  html`
    <div class="cover">
      <nav class="cluster justify-between">
        <a href="#" class="logo">
          <img src="https://placehold.co/100x100" />
        </a>
        <div class="cluster">
          <a href="#" class="link link-navigation">Link</a>
          <a href="#" class="link link-navigation">Link</a>
          <a href="#" class="link link-navigation">Link</a>
        </div>
      </nav>
      <div class="sidebar sidebar-split gap-m">
        <div class="prose fixed">
          <h1 class="hero-headline">landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse.
          </p>
          <button class="btn">Call to Action</button>
        </div>
        <div class="frame photo">
          <img src="https://placehold.co/400x600" />
        </div>
      </div>
    </div>
  `;
