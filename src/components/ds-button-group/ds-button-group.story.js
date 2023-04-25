import { html } from 'lit';
import './ds-button-group.js';

export default {
    title: 'Components/Button Group',
    component: 'ds-button-group',
};

export const Default = () =>
    html`
        <ds-button-group>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </ds-button-group>
    `;

export const Vertical = () =>
    html`
        <ds-button-group vertical>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </ds-button-group>
    `;

export const SmallButtons = () =>
    html`
        <ds-button-group>
            <button class="small">Button 1</button>
            <button class="small">Button 2</button>
            <button class="small">Button 3</button>
        </ds-button-group>
    `;
