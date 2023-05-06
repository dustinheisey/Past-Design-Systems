import { html } from "lit";

export default {
  title: "Design System/Elements/Form/Radio",
};

export const Radio = () => html`
  <label>
    <input type="radio" name="radio" />
    Radio
  </label>
`;

export const RadioCard = () => html`
  <label class="input-card">
    <input type="radio" />
    <span>
      <svg>
        <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
      </svg>
      Web Design & Development
    </span>
  </label>
`;
