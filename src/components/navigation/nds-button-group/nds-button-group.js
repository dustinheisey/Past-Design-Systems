import { LitElement, html, css } from "lit";

class ButtonGroup extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      ::slotted(button) {
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        color: #333;
        cursor: pointer;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        transition: background-color 0.3s;
      }

      ::slotted(button:hover) {
        background-color: #ddd;
      }

      ::slotted(button:first-child) {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      ::slotted(button:last-child) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("button-group", ButtonGroup);
