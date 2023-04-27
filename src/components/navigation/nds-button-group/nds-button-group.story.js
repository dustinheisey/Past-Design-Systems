import { html } from "lit";
import "./nds-button-group.js";

export default {
  title: "Components/Navigation/Button Group",
  component: "ds-button-group",
};

export const Default = () =>
  html`
    <nds-button-group>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </nds-button-group>
  `;

export const Vertical = () =>
  html`
    <nds-button-group vertical>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </nds-button-group>
  `;

export const SmallButtons = () =>
  html`
    <nds-button-group>
      <button class="small">Button 1</button>
      <button class="small">Button 2</button>
      <button class="small">Button 3</button>
    </nds-button-group>
  `;
