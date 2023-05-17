import { html } from "lit";

export default {
  title: "Design System/Elements/Checkbox",
};

export const Checkbox = () => html`
  <label class="checkbox-label">
    <input class="checkbox" type="checkbox" name="checkbox" />
    Checkbox
  </label>
`;

export const CheckboxCard = () => html`
  <label class="input-card">
    <input type="checkbox" />
    <span>
      <svg focusable="false">
        <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
      </svg>
      Web Design & Development
    </span>
  </label>
`;
