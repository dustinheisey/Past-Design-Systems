import { html } from "lit";

export default {
  title: "Design System/Elements/Figure",
};

export const Default = () => html`
  <figure>
    <img src="https://picsum.photos/200" alt="Random Image" />
    <figcaption>This is a caption for the image.</figcaption>
  </figure>
`;