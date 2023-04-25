import { LitElement, html, css } from 'lit';

class ToggletipComponent extends LitElement {
    static get properties() {
        return {
            text: { type: String },
            open: { type: Boolean, reflect: true },
        };
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                position: relative;
            }

            .toggletip {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #333;
                color: #fff;
                padding: 8px;
                border-radius: 4px;
                font-size: 14px;
                line-height: 1;
                white-space: nowrap;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s, transform 0.2s;
                z-index: 10;
            }

            :host([open]) .toggletip {
                opacity: 1;
                pointer-events: auto;
            }

            button {
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();
        this.text = '';
        this.open = false;
    }

    toggleToggletip() {
        this.open = !this.open;
    }

    render() {
        return html`
            <button @click="${this.toggleToggletip}">Toggle Toggletip</button>
            <div class="toggletip">${this.text}</div>
        `;
    }
}

customElements.define('ds-toggletip', ToggletipComponent);
