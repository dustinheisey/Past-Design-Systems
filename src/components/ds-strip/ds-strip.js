import { LitElement, html, css } from 'lit';

class CardSwipe extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch;
                scroll-snap-type: x mandatory;
                scrollbar-width: none; /* Firefox */
            }

            :host::-webkit-scrollbar {
                display: none; /* Chrome, Safari, and Edge */
            }

            .card {
                display: inline-block;
                width: 100%;
                scroll-snap-align: start;
            }
        `;
    }

    render() {
        return html` <slot></slot> `;
    }
}

customElements.define('card-swipe', CardSwipe);
