import { html } from "lit";

export default {
  title: "Components/Prose/List",
};

export const UnorderedList = () => html`
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
`;

export const OrderedList = () => html`
  <ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
`;
