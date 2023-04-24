import { html } from 'lit';

export default {
    title: 'Elements/Interactive',
    tags: ['autodocs'],
};

export const Details = () => html`
    <details>
        <summary>Click here for more information</summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare,
            massa vel ultricies aliquet, libero dolor convallis tortor, in
            luctus libero metus vitae lorem. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
    </details>
`;

export const Dialog = () => html`
    <dialog>
        <h2>Dialog Title</h2>
        <p>This is the content of the dialog.</p>
        <button>Close</button>
    </dialog>
`;
