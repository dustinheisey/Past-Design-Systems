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

export const Text = () => html`
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" /><br /><br />
`;

export const Radio = () => html`
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label><br />
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label><br />
`;

export const Checkbox = () => html`
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    <label for="vehicle1"> I have a bike</label><br />
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
    <label for="vehicle2"> I have a car</label><br />
`;

export const Range = () => html`
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="100" />
`;
