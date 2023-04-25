import { html } from 'lit';
import './ds-card.js';

export default {
    title: 'Components/Card',
    component: 'ds-card',
};

export const Default = () =>
    html`
        <ds-card>
            <h3>Title</h3>
            <p>Content goes here.</p>
        </ds-card>
    `;

export const WithImage = () =>
    html`
        <ds-card image="https://via.placeholder.com/150">
            <h3>Title</h3>
            <p>Content goes here.</p>
        </ds-card>
    `;

export const WithFooter = () =>
    html`
        <ds-card image="https://via.placeholder.com/150">
            <h3>Title</h3>
            <p>Content goes here.</p>
            <div slot="footer">Footer content goes here.</div>
        </ds-card>
    `;
