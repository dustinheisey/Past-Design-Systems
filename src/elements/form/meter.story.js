import { html } from 'lit';

export default {
    title: 'Elements/Forms/Meter',
    tags: ['autodocs'],
};

export const Meter = () =>
    html`<label for="file-upload">File Upload:</label>
        <meter id="file-upload" max="100">70%</meter>`;
