import { LitElement, html, css } from 'lit';

class SpinButtonsComponent extends LitElement {
    static get properties() {
        return {
            value: { type: Number },
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
        };
    }

    constructor() {
        super();
        this.value = 0;
        this.min = 0;
        this.max = 100;
        this.step = 1;
    }

    static get styles() {
        return css`
            button {
                margin: 0 0.25rem;
                padding: 0.25rem 0.5rem;
            }
        `;
    }

    render() {
        return html`
            <button @click="${this.decrement}">-</button>
            <input
                type="number"
                .value="${this.value}"
                .min="${this.min}"
                .max="${this.max}"
                .step="${this.step}"
                @input="${this.onInput}"
            />
            <button @click="${this.increment}">+</button>
        `;
    }

    decrement() {
        if (this.value > this.min) {
            this.value -= this.step;
            this.requestUpdate('value');
            this.dispatchEvent(
                new CustomEvent('change', {
                    detail: { value: this.value },
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    increment() {
        if (this.value < this.max) {
            this.value += this.step;
            this.requestUpdate('value');
            this.dispatchEvent(
                new CustomEvent('change', {
                    detail: { value: this.value },
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    onInput(e) {
        this.value = parseFloat(e.target.value);
        this.requestUpdate('value');
        this.dispatchEvent(
            new CustomEvent('input', {
                detail: { value: this.value },
                bubbles: true,
                composed: true,
            })
        );
    }
}

customElements.define('ds-spin-button', SpinButtonsComponent);
