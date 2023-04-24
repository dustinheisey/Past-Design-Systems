import { html } from 'lit';

export default {
    title: 'Elements/Text',
    tags: ['autodocs'],
};

export const A = () => html`
    <p>Visit my <a href="#">website</a> for more information.</p>
`;

export const Abbr = () => html`
    <p>
        The <abbr title="World Health Organization">WHO</abbr> is a specialized
        agency of the United Nations.
    </p>
`;

export const B = () => html` <p><b>Bold Text</b></p> `;

export const Bdi = () => html`
    <p><bdi>Isolated Text</bdi> surrounded by normal text.</p>
`;

export const Bdo = () => html` <p><bdo dir="rtl">RTL Text</bdo></p> `;

export const Br = () => html` <p>Line 1<br />Line 2</p> `;

export const Cite = () => html` <p><cite>Book Title</cite> by Author Name</p> `;

export const Code = () => html`
    <p>Use the <code>console.log()</code> method to output to the console.</p>
`;

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

export const Small = () => html` <p><small>Small Text</small></p> `;

export const Span = () => html`
    <p>
        A
        <span
            style="color: blue;
    "
            >blue</span
        >
        word.
    </p>
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

export const Math = () => html`
    <p>
        The infinite sum
        <math display="block">
            <mrow>
                <munderover>
                    <mo>∑</mo>
                    <mrow>
                        <mi>n</mi>
                        <mo>=</mo>
                        <mn>1</mn>
                    </mrow>
                    <mrow>
                        <mo>+</mo>
                        <mn>∞</mn>
                    </mrow>
                </munderover>
                <mfrac>
                    <mn>1</mn>
                    <msup>
                        <mi>n</mi>
                        <mn>2</mn>
                    </msup>
                </mfrac>
            </mrow>
        </math>
        is equal to the real number
        <math display="inline">
            <mfrac>
                <msup>
                    <mi>π</mi>
                    <mn>2</mn>
                </msup>
                <mn>6</mn>
            </mfrac></math
        >.
    </p>
`;
