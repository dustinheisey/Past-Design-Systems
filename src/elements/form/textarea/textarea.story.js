import { html } from 'lit';

export default {
    title: 'Elements/Form/Textarea',
};

export const Textarea = () => html`
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
`;
