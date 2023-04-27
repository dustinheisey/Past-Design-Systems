import { html } from "lit";
import "./nds-bottombar.js";

export default {
  title: "Components/Navigation/Bottombar",
  component: "ds-bottombar",
};

export const Default = () =>
  html`
    <nds-bottombar>
      <div slot="left-content">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div slot="center-content">
        <h1>Welcome to my website!</h1>
      </div>
      <div slot="right-content">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </nds-bottombar>
  `;
