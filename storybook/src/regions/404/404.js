import { html } from "lit";

export const simple404 = html`
  <section class="cover center-intrinsic">
    <div class="principle prose">
      <p class="overline">404</p>
      <h1 class="page-headline">Page not found</h1>
      <p>Sorry, the page you're looking for can't be found.</p>
      <a href="/" class="btn">Go Home</a>
    </div>
  </section>
`;

export const splitWithImage404 = html`
  <section class="cover sidebar split-screen">
    <div class="fixed center-intrinsic prose">
      <div class="principle">
        <p class="overline">404</p>
        <h1 class="page-headline">Page not found</h1>
        <p>Sorry, the page you're looking for can't be found.</p>
        <a href="/" class="btn">Go Home</a>
      </div>
    </div>
    <div class="frame full">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
    </div>
  </section>
`;

export const bgImage404 = html`
  <div class="bg-img">
    <img
      src="https://generative-placeholders.glitch.me/image?width=600&height=300"
      alt="placeholder"
    />
    <section class="cover center-intrinsic">
      <div class="principle prose filter">
        <p class="overline">404</p>
        <h1 class="page-headline">Page not found</h1>
        <p>Sorry, the page you're looking for can't be found.</p>
        <a href="/" class="btn">Go Home</a>
      </div>
    </section>
  </div>
`;
