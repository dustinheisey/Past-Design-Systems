import { html } from 'lit';
import '../components/d-dropdown.js';

export default {
    title: 'Components/Dropdown',
    component: 'd-dropdown',
    argTypes: {
        label: { control: 'text' },
        options: { control: 'array' },
        value: { control: 'text' },
    },
    args: {
        label: 'Dropdown',
        options: ['Option 1', 'Option 2', 'Option 3'],
        value: 'Option 1',
    },
};

const Template = ({ label, options, value }) => html`
    <d-dropdown
        label="${label}"
        .options="${options}"
        value="${value}"
    ></d-dropdown>
`;

export const Dropdown = Template.bind({});
Dropdown.args = {
    label: 'Dropdown',
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
};
