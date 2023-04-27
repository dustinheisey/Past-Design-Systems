import { LitElement, html, css } from "lit";

class BannerComponent extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      type: { type: String },
      dismissable: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
      }

      .banner-success {
        background-color: #d4edda;
        color: #155724;
      }

      .banner-info {
        background-color: #cce5ff;
        color: #004085;
      }

      .banner-warning {
        background-color: #fff3cd;
        color: #856404;
      }

      .banner-danger {
        background-color: #f8d7da;
        color: #721c24;
      }

      .banner-dismiss {
        margin-left: 16px;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.message = "";
    this.type = "info";
    this.dismissable = false;
  }

  onClose() {
    this.dispatchEvent(new CustomEvent("close"));
  }

  render() {
    return html`
      <div class="banner banner-${this.type}">
        ${this.message}
        ${this.dismissable
          ? html`<span class="banner-dismiss" @click="${this.onClose}"
              >Dismiss</span
            >`
          : null}
      </div>
    `;
  }
}

customElements.define("ds-banner", BannerComponent);
