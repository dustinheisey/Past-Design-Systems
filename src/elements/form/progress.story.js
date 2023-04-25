import { html } from 'lit';

export default {
    title: 'Elements/Forms/Progress',
    tags: ['autodocs'],
};

export const Progress = () =>
    html`<label for="file-upload">File Upload:</label>
        <progress id="file-upload" max="100">70%</progress>`;
