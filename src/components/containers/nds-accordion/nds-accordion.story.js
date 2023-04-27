import { html } from "lit";
import "./nds-accordion.js";

export default {
  title: "Components/Containers/Accordion",
  component: "ds-accordion",
};

export const Default = () =>
  html`
    <nds-accordion>
      <details slot="details">
        <summary>Section 1</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 2</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 3</summary>
        <p>Content goes here.</p>
      </details>
    </nds-accordion>
  `;

export const WithOpenSection = () =>
  html`
    <nds-accordion>
      <details slot="details" open>
        <summary>Section 1</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 2</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 3</summary>
        <p>Content goes here.</p>
      </details>
    </nds-accordion>
  `;

export const WithCustomTitle = () =>
  html`
    <nds-accordion>
      <details slot="details">
        <summary>Section 1</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 2</summary>
        <p>Content goes here.</p>
      </details>
      <details slot="details">
        <summary>Section 3</summary>
        <p>Content goes here.</p>
      </details>
      <h2 slot="title">Custom Title</h2>
    </nds-accordion>
  `;
