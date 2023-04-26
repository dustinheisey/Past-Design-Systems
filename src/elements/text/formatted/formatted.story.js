import { html } from 'lit';

export default {
    title: 'Elements/Text/Formatted',
};

export const Default = {
    render: () =>
        html` <p>John <del>Doe</del> <ins>Smith</ins> was born in 1990.</p> `,
};

export const Del = () => html` <p>John <del>Doe</del> was born in 1990.</p> `;

export const Ins = () => html` <p>John <ins>Smith</ins> was born in 1990.</p> `;
