import { html } from 'lit';

export default {
    title: 'Elements/Forms/Button',
    tags: ['autodocs'],
};

export const Default = () => html`
    <div class="flex gap-s">
        <button
            class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Primary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
        >
            Secondary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Tertiary Button
        </button>
        <button>Icon Button</button>
        <button>FAB Button</button>
    </div>
`;

export const PrimaryButton = () => html`
    <div class="flex gap-m">
        <button
            class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Primary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Primary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Primary Button
        </button></label>
    </div>
`;

export const SecondaryButton = () => html`
    <div class="flex gap-m">
        <button
            class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
        >
            Secondary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
        >
            Secondary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
        >
            Secondary Button
        </button>
    </div>
`;
export const TertiaryButton = () => html`
    <div class="flex gap-m">
        <button
            class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Tertiary Button
        </button>
        <button
            class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Tertiary Button
        </button>

        <button
            class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
        >
            Tertiary Button
        </button>
    </div>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <title>hose</title>
        <g
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="none"
            stroke="#212121"
        >
            <path
                d="M8,11a2,2,0,0,1-4,0C4,9.9,6,8,6,8S8,9.9,8,11Z"
                stroke="#212121"
            ></path>
            <path
                d="M1,23H21.5a1.5,1.5,0,0,0,0-3H4.5a1.5,1.5,0,0,1,0-3H9.971a8,8,0,0,0,4.619-1.468l3.425-2.422a2.329,2.329,0,0,0-.189-3.924L14.814,7.465"
            ></path>
            <polygon
                points="6.529 3.883 7.496 2.132 15.807 5.729 14.814 7.465 13.822 9.202 6.529 3.883"
                stroke="#212121"
            ></polygon>
        </g>
    </svg>
`;
export const IconButton = () => html`<button>Icon</button>`;
export const FAB = () => html`<button>FAB</button>`;
