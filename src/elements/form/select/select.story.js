import { html } from 'lit';

export default {
    title: 'Elements/Form/Select',
};

export const Default = () =>
    html`<label for="fruit">Choose a fruit:</label>
        <select id="fruit" name="fruit">
            <optgroup label="Citrus">
                <option value="orange">Orange</option>
                <option value="grapefruit">Grapefruit</option>
            </optgroup>
            <optgroup label="Berry">
                <option value="strawberry">Strawberry</option>
                <option value="blueberry">Blueberry</option>
            </optgroup>
        </select>`;

export const Option = () =>
    html`<label for="fruit">Choose a fruit:</label>
        <select id="fruit" name="fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
        </select>`;

export const Select = () =>
    html`
        <label for="fruit">Choose a fruit:</label>
        <select id="fruit" name="fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
        </select>
    `;
