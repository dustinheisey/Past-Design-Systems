import { html } from "lit";

export default {
  title: "Design System/Components/Dark Mode Toggle",
  decorators: [
    (story) =>
      html`<div
        style="width: 50vw; height: 50vh; background: var(--color-background); display: grid; place-items: center;"
      >
        ${story()}
      </div>`,
  ],
};

export const Default = () => html`<button
  type="button"
  class="dark-mode-toggle"
  id="theme-toggle"
  title="Toggles light & dark"
  onclick="onClick"
  aria-live="polite"
>
  <svg
    focusable="false"
    class="sun-and-moon"
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <circle
      class="sun"
      cx="12"
      cy="12"
      r="6"
      mask="url(#moon-mask)"
      fill="var(--color-primary)"
    />
    <g class="sun-beams" stroke="var(--color-primary)">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
    <mask class="moon" id="moon-mask">
      <rect x="0" y="0" height="100%" width="100%" fill="white" />
      <circle cx="24" cy="10" r="6" fill="black" />
    </mask>
  </svg>
</button>`;
