import { LitElement, html, css } from 'lit';

class SkeletonLoader extends LitElement {
    static get properties() {
        return {
            width: { type: String },
            height: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                background: linear-gradient(
                    90deg,
                    rgba(245, 245, 245, 1) 25%,
                    rgba(230, 230, 230, 1) 50%,
                    rgba(245, 245, 245, 1) 75%
                );
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 4px;
                width: 100%;
                height: 1em;
            }

            :host([width]) {
                width: var(--skeleton-width);
            }

            :host([height]) {
                height: var(--skeleton-height);
            }

            @keyframes loading {
                0% {
                    background-position: 200% 0;
                }

                100% {
                    background-position: -200% 0;
                }
            }
        `;
    }

    constructor() {
        super();
        this.width = '';
        this.height = '';
    }

    firstUpdated() {
        if (this.width) this.style.setProperty('--skeleton-width', this.width);
        if (this.height)
            this.style.setProperty('--skeleton-height', this.height);
    }

    render() {
        return html``;
    }
}

customElements.define('skeleton-loader', SkeletonLoader);
