import { html } from 'lit';

export default {
    title: 'Elements/Forms',
    tags: ['autodocs'],
};

export const Datalist = () =>
    html`
        <label for="browser">Choose a browser from this list:</label>
        <input list="browsers" name="browser" id="browser" />
        <datalist id="browsers">
            <option value="Chrome"></option>
            <option value="Firefox"></option>
            <option value="Internet Explorer"></option>
            <option value="Opera"></option>
            <option value="Safari"></option>
        </datalist>
    `;

export const Fieldset = () => html`
    <form>
        <fieldset>
            <legend>Enter your name:</legend>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" /><br />
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" /><br />
        </fieldset>
    </form>
`;
