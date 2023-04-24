import { html } from 'lit';

export default {
    title: 'Elements/Forms/Output',
    tags: ['autodocs'],
};

export const Output = () =>
    html`<label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <output for="name"></output>`;