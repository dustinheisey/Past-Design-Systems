import { html } from 'lit';

export default {
    title: 'Elements/Forms/Textarea',
    tags: ['autodocs'],
};

export const Textarea = () => html`
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
`;
