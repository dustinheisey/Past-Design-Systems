import { html } from 'lit';

export default {
    title: 'Elements/Forms/Input',
    tags: ['autodocs'],
};

export const Input = () =>
    html`
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
    `;
