import { LitElement, html, css } from "lit";

class CardComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 16px;
      }

      ::slotted([slot="header"]) {
        padding: 16px;
        background-color: #f9f9f9;
        border-bottom: 1px solid #e0e0e0;
      }

      ::slotted([slot="content"]) {
        padding: 16px;
      }

      ::slotted([slot="footer"]) {
        padding: 16px;
        background-color: #f9f9f9;
        border-top: 1px solid #e0e0e0;
      }
    `;
  }

  render() {
    return html`
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    `;
  }
}

customElements.define("ds-card", CardComponent);
