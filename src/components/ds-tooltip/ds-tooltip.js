import { LitElement, html, css } from 'lit';

class TooltipComponent extends LitElement {
    static get properties() {
        return {
            position: { type: String },
            content: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                position: relative;
            }

            .tooltip {
                position: absolute;
                background-color: #333;
                color: #fff;
                padding: 8px;
                border-radius: 4px;
                font-size: 14px;
                line-height: 1;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.2s;
                z-index: 10;
            }

            :host(:hover) .tooltip {
                opacity: 1;
            }

            .tooltip.top {
                left: 50%;
                bottom: calc(100% + 8px);
                transform: translateX(-50%);
            }

            .tooltip.right {
                left: calc(100% + 8px);
                top: 50%;
                transform: translateY(-50%);
            }

            .tooltip.bottom {
                left: 50%;
                top: calc(100% + 8px);
                transform: translateX(-50%);
            }

            .tooltip.left {
                right: calc(100% + 8px);
                top: 50%;
                transform: translateY(-50%);
            }
        `;
    }

    constructor() {
        super();
        this.position = 'top';
        this.content = '';
    }

    render() {
        return html`
            <slot></slot>
            <div class="tooltip ${this.position}">${this.content}</div>
        `;
    }
}

customElements.define('ds-tooltip', TooltipComponent);
