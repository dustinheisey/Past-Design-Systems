import { html } from 'lit';

export default {
    title: 'Elements/Sectioning',
    tags: ['autodocs'],
};

export const Address = () => html`
    <address>
        <p>John Doe</p>
        <p>123 Main Street</p>
        <p>Anytown, USA 12345</p>
    </address>
`;

export const Article = () => html`
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
`;

export const Aside = () => html`
    <aside>
        <h2>Related Content</h2>
        <ul>
            <li><a href="#">Related Link 1</a></li>
            <li><a href="#">Related Link 2</a></li>
            <li><a href="#">Related Link 3</a></li>
        </ul>
    </aside>
`;

export const Footer = () => html`
    <footer>
        <p>&copy; 2021 My Website</p>
    </footer>
`;

export const Header = () => html`
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

export const H1 = () => html` <h1>Heading 1</h1> `;

export const H2 = () => html` <h2>Heading 2</h2> `;

export const H3 = () => html` <h3>Heading 3</h3> `;

export const H4 = () => html` <h4>Heading 4</h4> `;

export const H5 = () => html` <h5>Heading 5</h5> `;

export const H6 = () => html` <h6>Heading 6</h6> `;

export const Hgroup = () => html`
    <hgroup>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </hgroup>
`;

export const Main = () => html`
    <main>
        <h1>Main Content</h1>
        <p>This is the main content of my website.</p>
    </main>
`;

export const Nav = () => html`
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
`;

export const Section = () => html`
    <section>
        <h2>Section Title</h2>
        <p>Section content goes here.</p>
    </section>
`;
