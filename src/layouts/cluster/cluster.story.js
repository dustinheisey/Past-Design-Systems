import { html } from "lit";

export default {
  title: "Layouts/Cluster",
  args: {
    justify: "start",
    align: "center",
  },
  decorators: [(story) => html` <div style="width: 75vw">${story()}</div> `],
};

export const Default = ({ justify, align }) =>
  html`
    <ul
      class="cluster ${justify ? `justify-${justify}` : ""} ${align
        ? `align-${align}`
        : ""}"
    >
      <a href="#" class="link link-navigation">Link 1</a>
      <a href="#" class="link link-navigation">Link 2</a>
      <a href="#" class="link link-navigation">Link 3</a>
      <a href="#" class="link link-navigation">Link 4</a>
    </ul>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Cluster component is a layout tool that can be used to align groups of elements that differ in length and are prone to wrapping. It can align elements horizontally to the left, right, or center and can be used for buttons at the end of forms, lists of tags, or page header logos and navigation. It uses justify-content: space-between and align-items: center for optimal wrapping without the need for media breakpoints.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};

export const JustifyStart = () =>
  html`
    <ul class="cluster justify-start">
      <a href="#" class="link link-navigation">Link 1</a>
      <a href="#" class="link link-navigation">Link 2</a>
      <a href="#" class="link link-navigation">Link 3</a>
      <a href="#" class="link link-navigation">Link 4</a>
    </ul>
  `;

export const JustifyCenter = () =>
  html`
    <ul class="cluster justify-center">
      <a href="#" class="link link-navigation">Link 1</a>
      <a href="#" class="link link-navigation">Link 2</a>
      <a href="#" class="link link-navigation">Link 3</a>
      <a href="#" class="link link-navigation">Link 4</a>
    </ul>
  `;

export const JustifyEnd = () =>
  html`
    <ul class="cluster justify-end">
      <a href="#" class="link link-navigation">Link 1</a>
      <a href="#" class="link link-navigation">Link 2</a>
      <a href="#" class="link link-navigation">Link 3</a>
      <a href="#" class="link link-navigation">Link 4</a>
    </ul>
  `;
