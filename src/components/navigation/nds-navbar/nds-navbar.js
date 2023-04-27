import { LitElement, html, css } from "lit";

class NavbarComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background-color: #333;
      }

      .logo {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
      }

      .menu {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .menu-item {
        margin-left: 16px;
      }

      .menu-link {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
      }

      .menu-link:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <a href="#" class="logo">Logo</a>
        <ul class="menu">
          <li class="menu-item">
            <a href="#" class="menu-link">Home</a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">About</a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">Contact</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("ds-navbar", NavbarComponent);
