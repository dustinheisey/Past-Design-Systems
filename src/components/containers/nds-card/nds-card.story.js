import { html } from "lit";
import "./nds-card.js";

export default {
  title: "Components/Containers/Card",
  component: "ds-card",
};

export const Default = () =>
  html`
    <nds-card>
      <h3>Title</h3>
      <p>Content goes here.</p>
    </nds-card>
  `;

export const WithImage = () =>
  html`
    <nds-card image="https://via.placeholder.com/150">
      <h3>Title</h3>
      <p>Content goes here.</p>
    </nds-card>
  `;

export const WithFooter = () =>
  html`
    <nds-card image="https://via.placeholder.com/150">
      <h3>Title</h3>
      <p>Content goes here.</p>
      <div slot="footer">Footer content goes here.</div>
    </nds-card>
  `;
