import { html } from 'lit';

export default {
    title: 'Elements/Definition List',
};

export const Default = () => html`
    <dl>
        <dt>Term 1</dt>
        <dd>Description 1</dd>
        <dt>Term 2</dt>
        <dd>Description 2</dd>
    </dl>
`;
