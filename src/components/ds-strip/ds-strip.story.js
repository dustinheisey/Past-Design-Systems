import { html } from 'lit';
import './ds-strip.js';

export default {
    title: 'Components/Strip Card Overflow Swipe',
    component: 'ds-strip',
};

export const Default = () =>
    html`
        <ds-strip>
            <div slot="content">Card 1</div>
            <div slot="content">Card 2</div>
            <div slot="content">Card 3</div>
        </ds-strip>
    `;
