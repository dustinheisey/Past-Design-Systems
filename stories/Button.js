import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return html`
    <button
      type="button"
      class=""
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};