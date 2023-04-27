import { html } from "lit";

export default {
  title: "Elements/Media/Image",
};

export const Default = () => html`
  <img src="https://picsum.photos/200" alt="Random Image" />
`;

export const Picture = () => html`
  <picture>
    <source media="(max-width: 600px)" srcset="https://picsum.photos/400" />
    <img src="https://picsum.photos/800" alt="Random Image" />
  </picture>
`;
