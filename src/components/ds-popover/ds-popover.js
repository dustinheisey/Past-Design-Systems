import { LitElement, html, css } from "lit";

class PopoverComponent extends LitElement {
  static get properties() {
    return {
      position: { type: String },
      open: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }

      .popover {
        position: absolute;
        background-color: #fff;
        color: #333;
        padding: 8px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        line-height: 1;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s, transform 0.2s;
        z-index: 10;
      }

      :host([open]) .popover {
        opacity: 1;
        pointer-events: auto;
      }

      .popover.top {
        left: 50%;
        bottom: calc(100% + 8px);
        transform: translateX(-50%) translateY(10px);
      }

      .popover.right {
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%) translateX(-10px);
      }

      .popover.bottom {
        left: 50%;
        top: calc(100% + 8px);
        transform: translateX(-50%) translateY(-10px);
      }

      .popover.left {
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%) translateX(10px);
      }

      :host([open]) .popover.top,
      :host([open]) .popover.bottom {
        transform: translateX(-50%) translateY(0);
      }

      :host([open]) .popover.left,
      :host([open]) .popover.right {
        transform: translateY(-50%) translateX(0);
      }

      button {
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.position = "top";
    this.open = false;
  }

  togglePopover() {
    this.open = !this.open;
  }

  render() {
    return html`
      <button @click="${this.togglePopover}">Toggle Popover</button>
      <div class="popover ${this.position}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("ds-popover", PopoverComponent);
