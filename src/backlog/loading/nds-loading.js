import { LitElement, html, css } from "lit";

class SpinnerComponent extends LitElement {
  static get properties() {
    return {
      size: { type: Number },
      strokeWidth: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .spinner {
        animation: rotate 2s linear infinite;
      }

      .path {
        stroke: currentColor;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dasharray: 1, 150;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 1, 150;
          stroke-dashoffset: -124;
        }
      }
    `;
  }

  constructor() {
    super();
    this.size = 50;
    this.strokeWidth = 4;
  }

  render() {
    return html`
      <svg
        class="spinner"
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 66 66"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="${this.strokeWidth}"
          stroke-miterlimit="10"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    `;
  }
}

customElements.define("ds-spinner", SpinnerComponent);
