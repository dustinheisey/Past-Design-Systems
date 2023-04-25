import { html } from 'lit';

export default {
    title: 'Elements/Form/Datalist',
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
