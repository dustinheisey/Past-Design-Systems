import { LitElement, html, css } from "lit";

class RadioGroup extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      ::slotted(radio-button) {
        margin-bottom: 8px;
      }
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("radio-group", RadioGroup);
