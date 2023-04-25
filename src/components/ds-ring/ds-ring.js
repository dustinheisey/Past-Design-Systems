import { LitElement, html, css } from 'lit';

class ProgressRing extends LitElement {
    static get properties() {
        return {
            size: { type: Number },
            strokeWidth: { type: Number },
            progress: { type: Number },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            svg {
                transform: rotate(-90deg);
            }

            circle {
                fill: none;
                stroke-linecap: round;
                transition: stroke-dashoffset 0.3s;
            }
        `;
    }

    constructor() {
        super();
        this.size = 50;
        this.strokeWidth = 4;
        this.progress = 50;
    }

    render() {
        const radius = (this.size - this.strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = ((100 - this.progress) / 100) * circumference;

        return html`
            <svg
                height="${this.size}"
                width="${this.size}"
                viewBox="0 0 ${this.size} ${this.size}"
            >
                <circle
                    stroke="currentColor"
                    stroke-width="${this.strokeWidth}"
                    r="${radius}"
                    cx="${this.size / 2}"
                    cy="${this.size / 2}"
                    style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"
                ></circle>
            </svg>
        `;
    }
}

customElements.define('progress-ring', ProgressRing);
