import { LitElement, html, css } from "lit";

class BreadcrumbComponent extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .breadcrumb {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .breadcrumb-item {
        margin-right: 8px;
      }

      .breadcrumb-link {
        color: #333;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
      }

      .breadcrumb-link:hover {
        text-decoration: underline;
      }
    `;
  }

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <ul class="breadcrumb">
        ${this.items.map(
          (item, index) => html`
            <li class="breadcrumb-item">
              ${index === this.items.length - 1
                ? html`<span class="breadcrumb-link">${item.label}</span>`
                : html`<a href="${item.url}" class="breadcrumb-link"
                    >${item.label}</a
                  >`}
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define("ds-breadcrumb", BreadcrumbComponent);
