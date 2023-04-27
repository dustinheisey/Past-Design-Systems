import { LitElement, html, css } from "lit-element";

class Icon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      size: { type: String },
      type: { type: String },
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
        stroke-width: 2px;
      }
    `;
  }

  render() {
    const { name, size, type } = this;
    const paths = {
      contact: {
        outline: [],
        fill: [
          "M14.619,23a1.05,1.05,0,0,1-.938-.579L10.572,16.2a1.052,1.052,0,0,1,.075-1.066l5.02-6.8-6.8,5.018a1.05,1.05,0,0,1-1.065.075L1.579,10.318A1.048,1.048,0,0,1,1.685,8.4L21.59,1.064a1.047,1.047,0,0,1,1.345,1.345L15.6,22.315a1.046,1.046,0,0,1-.925.683Z",
        ],
      },
      accessibility: {
        outline: [],
        fill: [
          "M9 3a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
          "M23 7L1 7L1 9L9 9L9 24L11 24L11 16L13 16L13 24L15 24L15 9L23 9L23 7z",
        ],
      },
      ecology: {
        outline: [],
        fill: [
          "M10,23a2.96,2.96,0,0,1,.246-1.165A9.987,9.987,0,0,1,4.868,19l1.455-1.222a1,1,0,0,0,.318-1.04l-.7-2.472a1.015,1.015,0,0,0-.231-.409L4.474,12.536l-.187-.319.64-.547,2.487-1.258a1,1,0,0,0,.538-.746l.4-2.74A1,1,0,0,0,8.1,6.1L6.451,4.34a.877.877,0,0,0-.094-.089L6.039,3.99a9.929,9.929,0,0,1,5.54-1.969l.448.745.586,1.713a1.012,1.012,0,0,0,.319.455l2.284,1.837a1,1,0,0,0,.627.221.934.934,0,0,0,.118-.007l3-.356a1.011,1.011,0,0,0,.375-.123c.417-.211.918.05,1,0a2.838,2.838,0,0,0,.268-.318,2.983,2.983,0,0,1,1.293-.967A11.993,11.993,0,1,0,10.134,23.84,2.988,2.988,0,0,1,10,23Z",
          "M23.316,7.037a1,1,0,0,0-1.116.35A6.447,6.447,0,0,1,17,10a5.006,5.006,0,0,0-5,5,4.946,4.946,0,0,0,1.07,3.063,6.932,6.932,0,0,1,1.98-4.012,1,1,0,1,1,1.414,1.414A4.966,4.966,0,0,0,15,19v1a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4,7.008,7.008,0,0,0,7-7V7.986A1,1,0,0,0,23.316,7.037Z",
        ],
      },
    };
    const path = paths[name];

    return html`
      <svg
        viewBox="0 0 24 24"
        width="${size === "s" ? "20" : "24"}"
        height="${size === "s" ? "20" : "24"}"
        aria-labelledby="${name}-title"
      >
        <title id="${name}-title">${name}</title>
        <path
          d="${path[type][0]}"
          fill="${type !== "outline" ? this.color || "currentColor" : "none"}"
          stroke="${type === "outline" ? this.color || "currentColor" : "none"}"
        ></path>
        <path
          d="${path[type][1]}"
          fill="${type !== "outline" ? this.color || "currentColor" : "none"}"
          stroke="${type === "outline" ? this.color || "currentColor" : "none"}"
        ></path>
      </svg>
    `;
  }
}

customElements.define("ds-icon", Icon);
