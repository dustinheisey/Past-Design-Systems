import { LitElement, html, css } from 'lit';

class DialogComponent extends LitElement {
    static get properties() {
        return {
            open: { type: Boolean, reflect: true },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .dialog-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1000;
            }

            :host([open]) .dialog-overlay {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .dialog {
                background-color: #fff;
                padding: 16px;
                border-radius: 4px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                width: 90%;
                position: relative;
            }
        `;
    }

    constructor() {
        super();
        this.open = false;
    }

    close() {
        this.open = false;
    }

    render() {
        return html`
            <div class="dialog-overlay" ?hidden="${!this.open}">
                <div class="dialog" role="dialog" aria-modal="true">
                    <slot></slot>
                    <button @click="${this.close}">Close</button>
                </div>
            </div>
        `;
    }
}

customElements.define('ds-dialog', DialogComponent);
