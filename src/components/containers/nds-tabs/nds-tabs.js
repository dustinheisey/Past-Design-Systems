import { LitElement, html, css } from "lit";

class TabsComponent extends LitElement {
  static get properties() {
    return {
      selectedIndex: {
        type: Number,
        attribute: "selected-index",
        reflect: true,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .tabs {
        display: flex;
        border-bottom: 1px solid #ccc;
      }

      .tab {
        cursor: pointer;
        padding: 12px;
        text-align: center;
        flex-grow: 1;
        font-weight: 500;
        color: #333;
        background-color: #f5f5f5;
        border-top: 2px solid transparent;
        transition: background-color 0.3s, border-color 0.3s;
      }

      .tab:hover {
        background-color: #eee;
      }

      .tab[selected] {
        background-color: #fff;
        border-color: #333;
      }

      .panels {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.selectedIndex = 0;
  }

  firstUpdated() {
    this.tabs = this.shadowRoot.querySelectorAll(".tab");
    this.panels = this.shadowRoot.querySelectorAll(".panel");
    this.selectTab(this.selectedIndex);
  }

  selectTab(index) {
    this.selectedIndex = index;

    this.tabs.forEach((tab, tabIndex) => {
      tab.selected = tabIndex === index;
    });

    this.panels.forEach((panel, panelIndex) => {
      panel.hidden = panelIndex !== index;
    });
  }

  handleTabClick(event) {
    const index = parseInt(event.currentTarget.dataset.index, 10);
    this.selectTab(index);
  }

  render() {
    return html`
      <div class="tabs">
        <div class="tab" data-index="0" @click="${this.handleTabClick}">
          Tab 1
        </div>
        <div class="tab" data-index="1" @click="${this.handleTabClick}">
          Tab 2
        </div>
        <div class="tab" data-index="2" @click="${this.handleTabClick}">
          Tab 3
        </div>
      </div>
      <div class="panels">
        <slot name="panel"></slot>
      </div>
    `;
  }
}

customElements.define("ds-tabs", TabsComponent);
