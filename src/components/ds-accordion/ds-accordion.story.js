import { html } from 'lit';
import './ds-accordion.js';

export default {
    title: 'Components/Accordion',
    component: 'ds-accordion',
};

export const Default = () =>
    html`
        <ds-accordion>
            <details slot="details">
                <summary>Section 1</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 2</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 3</summary>
                <p>Content goes here.</p>
            </details>
        </ds-accordion>
    `;

export const WithOpenSection = () =>
    html`
        <ds-accordion>
            <details slot="details" open>
                <summary>Section 1</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 2</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 3</summary>
                <p>Content goes here.</p>
            </details>
        </ds-accordion>
    `;

export const WithCustomTitle = () =>
    html`
        <ds-accordion>
            <details slot="details">
                <summary>Section 1</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 2</summary>
                <p>Content goes here.</p>
            </details>
            <details slot="details">
                <summary>Section 3</summary>
                <p>Content goes here.</p>
            </details>
            <h2 slot="title">Custom Title</h2>
        </ds-accordion>
    `;
