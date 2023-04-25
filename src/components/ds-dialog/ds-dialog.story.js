import { html } from 'lit';
import './ds-dialog.js';

export default {
    title: 'Components/Dialog',
    component: 'ds-dialog',
};

export const Default = () =>
    html`
        <ds-dialog>
            <h2 slot="title">Dialog Title</h2>
            <div slot="content">Content goes here.</div>
            <button slot="primary-action">Save</button>
            <button slot="secondary-action">Cancel</button>
        </ds-dialog>
    `;
