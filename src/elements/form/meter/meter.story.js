import { html } from 'lit';

export default {
    title: 'Elements/Form/Meter',
};

export const Meter = () =>
    html`<label for="file-upload">File Upload:</label>
        <meter id="file-upload" max="100">70%</meter>`;
