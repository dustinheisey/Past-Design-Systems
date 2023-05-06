import { html } from "lit";

export default {
  title: "Design System/Elements/Text/Blockquote",
};

export const Default = () => html`
  <blockquote class="blockquote-accent">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
    <footer>
      Someone famous in <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
`;
