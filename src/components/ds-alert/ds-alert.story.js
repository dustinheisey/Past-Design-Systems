import { html } from 'lit';
import './ds-alert.js';

export default {
    title: 'Components/Alert',
    component: 'ds-alert',
};

export const Default = () =>
    html`<ds-alert message="This is a default alert."></ds-alert>`;

export const Success = () =>
    html`<ds-alert
        message="This is a success alert."
        type="success"
    ></ds-alert>`;

export const Warning = () =>
    html`<ds-alert
        message="This is a warning alert."
        type="warning"
    ></ds-alert>`;

export const Error = () =>
    html`<ds-alert message="This is an error alert." type="error"></ds-alert>`;
