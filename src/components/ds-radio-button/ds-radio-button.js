import { LitElement, html, css } from 'lit';

class RadioButton extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            value: { type: String },
            checked: { type: Boolean },
            disabled: { type: Boolean },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin-bottom: 8px;
            }

            label {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

            input[type='radio'] {
                opacity: 0;
                position: absolute;
                margin: 0;
                z-index: -1;
                width: 0;
                height: 0;
                overflow: hidden;
                pointer-events: none;
            }

            .radio-button {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #ccc;
                background-color: #fff;
                border-radius: 50%;
                width: 16px;
                height: 16px;
                margin-right: 8px;
                transition: border-color 0.3s;
            }

            .radio-button-inner {
                display: none;
                background-color: #333;
                border-radius: 50%;
                width: 8px;
                height: 8px;
            }

            input[type='radio']:checked + .radio-button {
                border-color: #333;
            }

            input[type='radio']:checked + .radio-button .radio-button-inner {
                display: block;
            }

            input[type='radio']:disabled + .radio-button {
                border-color: #999;
                cursor: not-allowed;
            }

            input[type='radio']:disabled + .radio-button .radio-button-inner {
                background-color: #999;
            }
        `;
    }

    constructor() {
        super();
        this.label = '';
        this.name = '';
        this.value = '';
        this.checked = false;
        this.disabled = false;
    }

    render() {
        return html`
            <label>
                <input
                    type="radio"
                    name="${this.name}"
                    value="${this.value}"
                    ?checked="${this.checked}"
                    ?disabled="${this.disabled}"
                />
                <span class="radio-button">
                    <span class="radio-button-inner"></span>
                </span>
                ${this.label}
            </label>
        `;
    }
}

customElements.define('radio-button', RadioButton);
