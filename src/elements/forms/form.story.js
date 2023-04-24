import { html } from 'lit';

export default {
    title: 'Elements/Forms/Form',
    tags: ['autodocs'],
};

export const Form = () => html`
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" /><br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" /><br />
        <input type="submit" value="Submit" />
    </form>
`;
