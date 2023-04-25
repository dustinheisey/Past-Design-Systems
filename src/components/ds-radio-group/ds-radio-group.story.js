import { html } from 'lit';
import './ds-radio-group.js';

export default {
    title: 'Components/Radio Group',
    component: 'ds-radio-group',
};

export const Default = () =>
    html`
        <ds-radio-group>
            <ds-radio-button label="Option 1"></ds-radio-button>
            <ds-radio-button label="Option 2"></ds-radio-button>
            <ds-radio-button label="Option 3"></ds-radio-button>
        </ds-radio-group>
    `;

export const WithDefaultOption = () =>
    html`
        <ds-radio-group>
            <ds-radio-button label="Option 1"></ds-radio-button>
            <ds-radio-button label="Option 2"></ds-radio-button>
            <ds-radio-button label="Option 3"></ds-radio-button>
            <input
                type="hidden"
                name="options"
                value="Option 1"
                slot="default-option"
            />
        </ds-radio-group>
    `;
