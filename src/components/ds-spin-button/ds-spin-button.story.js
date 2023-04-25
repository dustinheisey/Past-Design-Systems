import { html } from 'lit';
import './ds-spin-button.js';

export default {
    title: 'Components/Spin-Buttons',
    component: 'ds-spin-button',
};

export const Default = () => html` <ds-spin-button></ds-spin-button> `;

export const WithMinMax = () =>
    html` <ds-spin-button min="10" max="100"></ds-spin-button> `;

export const WithStep = () =>
    html` <ds-spin-button step="0.1"></ds-spin-button> `;
