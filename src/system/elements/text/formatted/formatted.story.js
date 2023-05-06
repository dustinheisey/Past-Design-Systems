import { html } from "lit";

export default {
  title: "Design System/Elements/Text/Formatted",
  argTypes: {
    tag: {
      control: "select",
      description: "Text Tag",
      table: {
        type: { summary: "string" },
      },
      options: [
        "Del",
        "Ins",
        "Abbr",
        "Bdi",
        "Bdo",
        "Mark",
        "S",
        "U",
        "Wbr",
        "code",
        "pre",
      ],
    },
  },
};

function getTag(tag, text) {
  switch (tag) {
    case "Del":
      return html`<del>${text}</del>`;
    case "Ins":
      return html`<ins>${text}</ins>`;
    case "Abbr":
      return html`<abbr title="World Health Organization">${text}</abbr>`;
    case "Bdi":
      return html`<bdi>${text}</bdi>`;
    case "Bdo":
      return html`<bdo dir="rtl">${text}</bdo>`;
    case "Mark":
      return html`<mark>${text}</mark>`;
    case "S":
      return html`<s>${text}</s>`;
    case "U":
      return html`<u>${text}</u>`;
    case "Wbr":
      return html`<wbr>${text}</wbr>`;
    case "code":
      return html`<code>${text}</code>`;
    case "pre":
      return html`<pre>${text}</pre>`;
    default:
      return html`<del>${text}</del>`;
  }
}

export const Default = {
  render: ({ tag }) =>
    getTag(
      tag,
      "Ad Lorem et ut do amet laborum reprehenderit ullamco fugiat magna. Non nulla anim sunt Lorem est tempor."
    ),
};

export const Del = () => html` <p>John <del>Doe</del> was born in 1990.</p> `;

export const Ins = () => html` <p>John <ins>Smith</ins> was born in 1990.</p> `;

export const Abbr = () => html`
  <p>
    The <abbr title="World Health Organization">WHO</abbr> is a specialized
    agency of the United Nations.
  </p>
`;

export const Bdi = () => html`
  <p><bdi>Isolated Text</bdi> surrounded by normal text.</p>
`;

export const Bdo = () => html` <p><bdo dir="rtl">RTL Text</bdo></p> `;

export const Br = () => html` <p>Line 1<br />Line 2</p> `;

export const Cite = () => html` <p><cite>Book Title</cite> by Author Name</p> `;

export const Data = () => html`
  <p>
    The boiling point of water is
    <data value="100">100 degrees Celsius</data>.
  </p>
`;

export const Dfn = () => html`
  <p>The <dfn>HTML</dfn> stands for Hypertext Markup Language.</p>
`;

export const Em = () => html` <p><em>Emphasized Text</em></p> `;

export const I = () => html` <p><i>Italicized Text</i></p> `;

export const Kbd = () => html`
  <p>To save a file, press <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
`;

export const Mark = () => html`
  <p>Search for <mark>keywords</mark> on this page.</p>
`;

export const Q = () => html` <p><q>Quoted Text</q></p> `;

export const Rp = () => html` <p>The price is 100<rp>(</rp>$<rp>)</rp>.</p> `;

export const Rt = () => html`
  <p>
    The <ruby>日本<rt>Nihon</rt></ruby> is a country in East Asia.
  </p>
`;

export const Ruby = () => html`
  <p>
    The <ruby>日本<rt>Nihon</rt></ruby> is a country in East Asia.
  </p>
`;

export const S = () => html` <p><s>Strikethrough Text</s></p> `;

export const Samp = () => html`
  <p>The output of the program is <samp>Hello, World!</samp></p>
`;

export const Strong = () => html` <p><strong>Strong Text</strong></p> `;

export const Sub = () => html`
  <p>The chemical formula for water is H<sub>2</sub>O.</p>
`;

export const Sup = () => html` <p>The square of 2 is 2<sup>2</sup>.</p> `;

export const Time = () => html`
  <p>The current time is <time>9:00 AM</time>.</p>
`;

export const U = () => html` <p><u>Underlined Text</u></p> `;

export const Var = () => html` <p>The value of x is <var>x</var>.</p> `;

export const Wbr = () => html` <div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>`;

export const Code = () => html`
  <code>const example = 'This is a code snippet';</code>
`;

export const Pre = () => html`
  <pre>
const hello = () => {
  console.log("Hello, world!");
}

hello();
  </pre
  >
`;
