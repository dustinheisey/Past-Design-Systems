import { LitElement, html, css } from 'lit';

class DetailsAccordion extends LitElement {
    static get properties() {
        return {
            open: { type: Boolean },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin-bottom: 16px;
            }

            .accordion-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #f9f9f9;
                padding: 16px;
                cursor: pointer;
                font-weight: 500;
                border: 1px solid #e0e0e0;
                border-radius: 4px;
                transition: background-color 0.3s;
            }

            .accordion-header:hover {
                background-color: #f1f1f1;
            }

            .accordion-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }

            :host([open]) .accordion-content {
                max-height: 500px;
            }
        `;
    }

    constructor() {
        super();
        this.open = false;
    }

    toggle() {
        this.open = !this.open;
    }

    render() {
        return html`
            <div
                @click="${this.toggle}"
                class="accordion-header"
                role="button"
                tabindex="0"
            >
                <slot name="header"></slot>
            </div>
            <div class="accordion-content">
                <slot name="content"></slot>
            </div>
        `;
    }
}

customElements.define('details-accordion', DetailsAccordion);
