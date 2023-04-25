import { LitElement, html, css } from 'lit';

class RatingComponent extends LitElement {
    static get properties() {
        return {
            rating: { type: Number },
            max: { type: Number },
            readOnly: { type: Boolean },
        };
    }

    static get styles() {
        return css`
            :host {
                display: inline-flex;
                align-items: center;
            }

            .star {
                cursor: pointer;
                margin-right: 4px;
                color: #ccc;
            }

            .star:before {
                content: '\\2605';
                font-size: 24px;
            }

            .star[data-active] {
                color: #f1c40f;
            }
        `;
    }

    constructor() {
        super();
        this.rating = 0;
        this.max = 5;
        this.readOnly = false;
    }

    firstUpdated() {
        this.stars = this.shadowRoot.querySelectorAll('.star');
        this.updateStars();
    }

    updateStars() {
        this.stars.forEach((star, index) => {
            star.dataset.active = index < this.rating;
        });
    }

    handleClick(event) {
        if (this.readOnly) return;
        const index = parseInt(event.currentTarget.dataset.index, 10);
        this.rating = index + 1;
        this.updateStars();
        this.dispatchEvent(
            new CustomEvent('rating-changed', {
                detail: { rating: this.rating },
            })
        );
    }

    createStar(index) {
        return html`
            <span
                class="star"
                data-index="${index}"
                @click="${this.handleClick}"
            ></span>
        `;
    }

    render() {
        return html`
            ${Array.from({ length: this.max }, (_, index) =>
                this.createStar(index)
            )}
        `;
    }
}

customElements.define('ds-rating', RatingComponent);
