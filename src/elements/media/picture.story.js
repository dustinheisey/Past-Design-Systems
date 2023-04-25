import { html } from 'lit';

export default {
    title: 'Elements/Media/Picture',
};

export const Default = () => html`
    <picture>
        <source media="(max-width: 600px)" srcset="https://picsum.photos/400" />
        <img src="https://picsum.photos/800" alt="Random Image" />
    </picture>
`;
