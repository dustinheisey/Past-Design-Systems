import { html } from "lit";
import "./nds-carousel.js";

export default {
  title: "Components/Containers/Carousel",
  component: "ds-carousel",
};

export const Default = () =>
  html`
    <nds-carousel>
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
    </nds-carousel>
  `;

export const WithDots = () =>
  html`
    <nds-carousel dots>
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
    </nds-carousel>
  `;

export const WithArrows = () =>
  html`
    <nds-carousel arrows>
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
    </nds-carousel>
  `;

export const WithAutoplay = () =>
  html`
    <nds-carousel autoplay>
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
    </nds-carousel>
  `;
