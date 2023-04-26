import { html } from 'lit';

export default {
    title: 'Elements/Text/Headline',
};

export const HeroHeadline = () => html`
    <h1 class="hero">Welcome to our website</h1>
`;

export const PageHeadline = () => html` <h1 class="page">About Us</h1> `;

export const RegionHeadline = () =>
    html` <h2 class="region">Our Services</h2> `;

export const SectionHeadline = () =>
    html` <h3 class="section">Web Development</h3> `;

export const TitleHeadline = () => html` <h4 class="title">Our Team</h4> `;
