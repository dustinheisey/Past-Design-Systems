import { html } from 'lit';
import './ds-skeleton.js';

export default {
    title: 'Components/Skeleton',
    component: 'ds-skeleton',
};

export const Default = () => html` <ds-skeleton></ds-skeleton> `;

export const WithCustomWidth = () =>
    html` <ds-skeleton style="width: 200px"></ds-skeleton> `;

export const WithCustomHeight = () =>
    html` <ds-skeleton style="height: 50px"></ds-skeleton> `;

export const WithCustomBorderRadius = () =>
    html` <ds-skeleton style="border-radius: 10px"></ds-skeleton> `;
