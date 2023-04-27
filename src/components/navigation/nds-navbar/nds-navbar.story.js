import { html } from "lit";
import "./nds-navbar.js";

export default {
  title: "Components/Navigation/Navbar",
  component: "ds-navbar",
};

export const Default = () =>
  html`
    <nds-navbar>
      <nav slot="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <main slot="main-content">
        <h1>Welcome to my website!</h1>
        <p>Here you'll find all sorts of interesting things.</p>
      </main>
    </nds-navbar>
  `;
