import { html } from "lit";

export default {
  title: "Design System/Elements/Link",
  argTypes: {
    variant: {
      control: "select",
      description: "Link Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inline" },
      },
      options: ["inline", "navigation"],
    },
  },
  args: { variant: "inline" },
};

const links = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];

export const Default = ({ variant }) => {
  return html`
    <a
      href="/"
      class="link ${variant === "navigation" ? "link-navigation" : ""}"
    >
      Link Text
    </a>
  `;
};

export const Navigation = () => {
  return html`
    <nav class="cluster">
      ${links.map(
        (link) =>
          html`
            <a href=${link.url} class="link link-navigation">${link.label}</a>
          `
      )}
    </nav>
  `;
};

export const Inline = () => {
  return html`
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem
      vitae odio pellentesque luctus in at justo. Nam vitae odio eget leo
      vehicula consequat. Ut molestie, tortor eget finibus vehicula, nisi elit
      bibendum elit, vel ultrices nunc massa ut nulla. In hac habitasse platea
      dictumst. Suspendisse eleifend, augue vitae luctus bibendum, sem sapien
      porta mi, ac blandit nunc lorem in nisi. Proin porttitor diam vitae massa
      facilisis, vel dictum sapien dapibus. Ut tincidunt metus eget mauris
      faucibus lacinia. Nam at mauris turpis. Duis scelerisque enim et urna
      tincidunt, nec rhoncus ex auctor. Vestibulum facilisis felis dolor, vel
      interdum enim pretium a.
      <a href="#" class="link">Click here</a> to learn more about our services,
      or <a href="#" class="link">contact us</a> to schedule a consultation.
    </p>
  `;
};
