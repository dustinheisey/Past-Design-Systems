import { html } from 'lit';
import './ds-carousel.js';

export default {
    title: 'Components/Carousel',
    component: 'ds-carousel',
};

export const Default = () =>
    html`
        <ds-carousel>
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
        </ds-carousel>
    `;

export const WithDots = () =>
    html`
        <ds-carousel dots>
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
        </ds-carousel>
    `;

export const WithArrows = () =>
    html`
        <ds-carousel arrows>
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
        </ds-carousel>
    `;

export const WithAutoplay = () =>
    html`
        <ds-carousel autoplay>
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
        </ds-carousel>
    `;
