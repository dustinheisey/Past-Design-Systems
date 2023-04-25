import { LitElement, html, css } from 'lit';

class BottombarComponent extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            .bottombar {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 16px;
                background-color: #333;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
            }

            .bottombar-item {
                color: #fff;
                text-decoration: none;
                font-size: 16px;
            }

            .bottombar-item:hover {
                text-decoration: underline;
            }
        `;
    }

    render() {
        return html`
            <div class="bottombar">
                <a href="#" class="bottombar-item">Home</a>
                <a href="#" class="bottombar-item">About</a>
                <a href="#" class="bottombar-item">Contact</a>
            </div>
        `;
    }
}

customElements.define('ds-bottombar', BottombarComponent);
