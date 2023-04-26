import { html } from 'lit';

export default {
    title: 'Elements/Form/Progress',
};

export const Progress = () =>
    html`<label for="file-upload">File Upload:</label>
        <progress id="file-upload" max="100">70%</progress>`;
