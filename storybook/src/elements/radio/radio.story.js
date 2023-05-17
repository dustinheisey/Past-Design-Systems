import { html } from "lit";

export default {
  title: "Design System/Elements/Radio",
};

export const Radio = () => html`
  <label class="radio-label">
    <input type="radio" name="radio" />
    Radio
  </label>
`;

export const RadioCard = () => html`
  <label class="input-card">
    <input type="radio" />
    <span>
      <svg focusable="false">
        <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
      </svg>
      Web Design & Development
    </span>
  </label>
`;
