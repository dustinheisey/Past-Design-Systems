import { LitElement, html } from 'lit-element';

export class LitApp extends LitElement {
  render() {
    return html` <p>hello world</p> `;
  }
}

customElements.define('lit-app', LitApp);
