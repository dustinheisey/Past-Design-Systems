import { html } from "lit";

export default {
  title: "Design System/Elements/Media/Avatar",
  argTypes: {
    size: {
      control: "select",
      description: "Avatar Size",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
      options: ["s", "m", "l"],
    },
  },
};

export const Default = ({ size }) => html`
  <img
    src="https://picsum.photos/200"
    class="avatar ${size === "m" ? "" : `avatar-${size}`}"
    alt="Random Image"
  />
`;

export const Small = () => html`
  <img
    src="https://picsum.photos/200"
    class="avatar avatar-s"
    alt="Random Image"
  />
`;

export const Medium = () => html`
  <img src="https://picsum.photos/200" class="avatar" alt="Random Image" />
`;

export const Large = () => html`
  <img
    src="https://picsum.photos/200"
    class="avatar avatar-l"
    alt="Random Image"
  />
`;
