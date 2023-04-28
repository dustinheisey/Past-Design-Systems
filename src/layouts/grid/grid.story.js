import { html } from "lit";

export default {
  title: "Layouts/Grid",
};

export const Default = () =>
  html`
    <div class="grid">
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
      <div class="product-teaser col-3">
        <a href="{product link}">
          <figure class="frame">
            <img src="https://placehold.co/200x150" alt="{product name}" />
          </figure>
          <h3>{product name}</h3>
          <p>{product price}</p>
        </a>
      </div>
    </div>
  `;
