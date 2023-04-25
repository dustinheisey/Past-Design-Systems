import { LitElement, html, css } from 'lit';

class CarouselComponent extends LitElement {
    static get properties() {
        return {
            interval: { type: Number },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                position: relative;
                overflow: hidden;
            }

            .carousel-slides {
                display: flex;
                transition: transform 0.3s;
            }

            .carousel-slide {
                flex-shrink: 0;
                width: 100%;
                overflow: hidden;
            }

            .carousel-slide img {
                width: 100%;
                height: auto;
            }
        `;
    }

    constructor() {
        super();
        this.interval = 3000;
        this.currentSlide = 0;
        this.slideTimer = null;
    }

    firstUpdated() {
        this.slidesContainer =
            this.shadowRoot.querySelector('.carousel-slides');
        this.slides = this.slidesContainer.querySelectorAll('.carousel-slide');
        this.startAutoCycle();
    }

    startAutoCycle() {
        this.slideTimer = setInterval(() => {
            this.currentSlide =
                this.currentSlide + 1 === this.slides.length
                    ? 0
                    : this.currentSlide + 1;
            this.updateCarousel();
        }, this.interval);
    }

    updateCarousel() {
        const transformValue = `translateX(-${this.currentSlide * 100}%)`;
        this.slidesContainer.style.transform = transformValue;
    }

    render() {
        return html`
            <div class="carousel-slides">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('ds-carousel', CarouselComponent);
