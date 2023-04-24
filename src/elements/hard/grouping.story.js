import { html } from 'lit';

export default {
    title: 'Elements/Grouping',
    tags: ['autodocs'],
};

export const Blockquote = () => html`
    <blockquote>
        <p>
            “The future belongs to those who believe in the beauty of their
            dreams.”
        </p>
        <cite>Eleanor Roosevelt</cite>
    </blockquote>
`;

export const Dd = () => html`
    <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term 2</dt>
        <dd>Definition 2</dd>
    </dl>
`;

export const Div = () => html`
    <div>
        <h2>Div Title</h2>
        <p>Div content goes here.</p>
    </div>
`;

export const Dl = () => html`
    <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term 2</dt>
        <dd>Definition 2</dd>
    </dl>
`;

export const Dt = () => html`
    <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term2</dt>
        <dd>Definition 2</dd>
    </dl>
`;
export const Figcaption = () => html`
    <figure>
        <img src="image.jpg" alt="Image Description" />
        <figcaption>Figure Caption</figcaption>
    </figure>
`;

export const Figure = () => html`
    <figure>
        <img src="image.jpg" alt="Image Description" />
        <figcaption>Figure Caption</figcaption>
    </figure>
`;

export const Hr = () => html`
    <p>Paragraph 1</p>
    <hr />
    <p>Paragraph 2</p>
`;

export const Li = () => html`
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
    </ul>
`;

export const Menu = () => html`
    <menu>
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
    </menu>
`;

export const Ol = () => html`
    <ol>
        <li>Ordered List Item 1</li>
        <li>Ordered List Item 2</li>
        <li>Ordered List Item 3</li>
    </ol>
`;

export const P = () => html` <p>Paragraph Text</p> `;

export const Pre = () => html`
    <pre> <code> const greeting = 'Hello, World!'; console.log(greeting); </code> </pre>
`;

export const Ul = () => html`
    <ul>
        <li>Unordered List Item 1</li>
        <li>Unordered List Item 2</li>
        <li>Unordered List Item 3</li>
    </ul>
`;