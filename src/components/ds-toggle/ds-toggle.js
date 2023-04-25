import { LitElement, html, css } from 'lit';

class SwitchToggle extends LitElement {
    static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            disabled: { type: Boolean },
        };
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 34px;
            }

            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: 0.4s;
                border-radius: 34px;
            }

            .slider:before {
                position: absolute;
                content: '';
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: 0.4s;
                border-radius: 50%;
            }

            input:checked + .slider {
                background-color: #66bb6a;
            }

            input:focus + .slider {
                box-shadow: 0 0 1px #66bb6a;
            }

            input:checked + .slider:before {
                transform: translateX(26px);
            }

            input:disabled + .slider {
                background-color: #eee;
                cursor: not-allowed;
            }

            input:disabled:checked + .slider {
                background-color: #b2dfdb;
            }
        `;
    }

    constructor() {
        super();
        this.checked = false;
        this.disabled = false;
    }

    toggle() {
        if (this.disabled) return;
        this.checked = !this.checked;
        this.dispatchEvent(
            new CustomEvent('change', { detail: { checked: this.checked } })
        );
    }

    render() {
        return html`
            <label class="switch">
                <input
                    type="checkbox"
                    ?checked="${this.checked}"
                    ?disabled="${this.disabled}"
                />
                <span class="slider" @click="${this.toggle}"></span>
            </label>
        `;
    }
}

customElements.define('switch-toggle', SwitchToggle);
