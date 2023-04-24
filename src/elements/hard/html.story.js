import { html } from 'lit-html';

export default {
    title: 'Elements/Base',
    tags: ['autodocs'],
};

export const Html = () => html`
    <html>
        <head>
            <title>My Title</title>
        </head>
        <body>
            <h1>Welcome to my website!</h1>
            <p>This is the content of my website.</p>
        </body>
    </html>
`;

export const Body = () => html`
    <body>
        <h1>Welcome to my website!</h1>
        <p>This is the content of my website.</p>
    </body>
`;
