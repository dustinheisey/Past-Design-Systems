import { LitElement, html, css } from "lit";

class TabPanel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        border: 1px solid #ccc;
        border-top: none;
      }
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("tab-panel", TabPanel);
