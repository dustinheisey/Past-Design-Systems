import { LitElement, html, css } from 'lit';

class AlertComponent extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            message: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin-bottom: 16px;
            }

            .alert {
                padding: 16px;
                border-radius: 4px;
                font-size: 1em;
                color: #fff;
                transition: background-color 0.3s;
            }

            .alert.info {
                background-color: #2196f3;
            }

            .alert.success {
                background-color: #4caf50;
            }

            .alert.warning {
                background-color: #ffc107;
            }

            .alert.error {
                background-color: #f44336;
            }
        `;
    }

    constructor() {
        super();
        this.type = 'info';
        this.message = 'This is an alert';
    }

    render() {
        return html`
            <div class="alert ${this.type}" role="alert">${this.message}</div>
        `;
    }
}

customElements.define('ds-alert', AlertComponent);
