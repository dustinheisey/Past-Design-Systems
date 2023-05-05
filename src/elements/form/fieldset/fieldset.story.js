import { html } from "lit";

export default {
  title: "Elements/Form/Fieldset",
};

export const Fieldset = () => html`
  <fieldset class="cards">
    <legend>
      <span class="required">What Services Are You Interested In?</span>
    </legend>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg>
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg>
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg>
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
  </fieldset>
`;
