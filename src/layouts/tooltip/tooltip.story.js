import { html } from "lit";

export default {
  title: "Layouts/Tooltip",
};

export const Default = () =>
  html`
    <p>
      The
      <abbr>
        HTML
        <tool-tip tip-position="inline-start">
          Hypertext Markup Language
        </tool-tip>
      </abbr>
      abbr element.
    </p>
  `;
