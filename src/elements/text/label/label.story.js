import { html } from 'lit';

export default {
    title: 'Elements/Text/Label',
};

export const Default = () => html`
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />
    </form>
`;
