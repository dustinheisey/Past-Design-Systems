import { html } from 'lit';

export default {
    title: 'Elements/Details',
};

export const Default = () => html`
    <details>
        <summary>Click to expand</summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula sapien at nisl bibendum, quis pretium massa elementum. Nunc
            fermentum mi sit amet augue iaculis, vel pharetra metus pulvinar.
        </p>
    </details>
`;
