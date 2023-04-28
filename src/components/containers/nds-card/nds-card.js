import { LitElement, html, css } from "lit";

class CardComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 16px;
      }

      ::slotted([slot="header"]) {
        padding: 16px;
        background-color: #f9f9f9;
        border-bottom: 1px solid #e0e0e0;
      }

      ::slotted([slot="content"]) {
        padding: 16px;
      }

      ::slotted([slot="footer"]) {
        padding: 16px;
        background-color: #f9f9f9;
        border-top: 1px solid #e0e0e0;
      }

      /*? The Card - Showcase products, services, blog posts, or other types of content  */
      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--color-bg, var(--color-bg-primary));
        border: var(--border-thin) solid;
        padding: var(--space-m);
        border-radius: var(--radius-m);
        box-shadow: var(--shadow-card);
        max-inline-size: 66ch;
        text-decoration: none;
        border: 2px solid var(--color-bg-secondary-text);
      }

      .card > p {
        margin-block-end: 0;
      }

      .card.media {
        padding: 0;
        transition: all 0.3s;
      }

      .card.media:hover {
        box-shadow: var(--shadow-card-hover);
      }

      .card > img {
        border-radius: var(--radius-m) var(--radius-m) 0 0;
        box-shadow: none;
      }

      .card > .inline {
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    `;
  }
}

customElements.define("ds-card", CardComponent);
