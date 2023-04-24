import { html } from 'lit';

/**
 * Button
 */
export default {
    title: 'Elements/Forms/Button',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'circular'],
        },
        icon: {
            control: 'select',
            options: ['none', 'start', 'end'],
        },
    },
    render: ({ variant, icon, label }) =>
        html`
            <button class="btn btn-${variant}">
                ${icon === 'start'
                    ? html`
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                          >
                              <g
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  fill="none"
                                  stroke="currentColor"
                              >
                                  <line x1="22" y1="12" x2="2" y2="12"></line>
                                  <polyline points="9,19 2,12 9,5 "></polyline>
                              </g>
                          </svg>
                      `
                    : ''}
                ${label === 'icon'
                    ? html`
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                          >
                              <g
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  fill="none"
                                  stroke="currentColor"
                              >
                                  <line x1="12" y1="7" x2="12" y2="17"></line>
                                  <line x1="17" y1="12" x2="7" y2="12"></line>
                                  <circle cx="12" cy="12" r="11"></circle>
                              </g>
                          </svg>
                      `
                    : label}
                ${icon === 'end'
                    ? html`
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                          >
                              <g
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  fill="none"
                                  stroke="currentColor"
                              >
                                  <line x1="2" y1="12" x2="22" y2="12"></line>
                                  <polyline
                                      points="15,5 22,12 15,19 "
                                  ></polyline>
                              </g>
                          </svg>
                      `
                    : ''}
            </button>
        `,
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
};

export const Primary = {
    args: {
        variant: 'primary',
        label: 'Primary Button',
    },
};

export const Secondary = {
    args: {
        variant: 'secondary',
        label: 'Secondary Button',
    },
};

export const Tertiary = {
    args: {
        variant: 'tertiary',
        label: 'Tertiary Button',
    },
};

export const Circular = {
    args: {
        variant: 'circular',
        label: html`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <g
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
            >
                <line x1="12" y1="7" x2="12" y2="17"></line>
                <line x1="17" y1="12" x2="7" y2="12"></line>
                <circle cx="12" cy="12" r="11"></circle>
            </g>
        </svg>`,
    },
};

// export const Text = () => html`
//     <button
//         class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
//         Primary Button
//     </button>
// `;

// export const IconLeft = () => html`
//     <button
//         class="px-xs py-2xs font-body inline-flex gap-xs align-baseline text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
// <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
// >
//     <g
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         fill="none"
//         stroke="currentColor"
//     >
//         <line x1="22" y1="12" x2="2" y2="12"></line>
//         <polyline points="9,19 2,12 9,5 "></polyline>
//     </g>
// </svg>
//         Primary Button
//     </button>
// `;

// export const IconRight = () => html`
//     <button
//         class="px-xs py-2xs inline-flex gap-xs align-baseline font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
//         Primary Button
// <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
// >
//     <g
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         fill="none"
//         stroke="currentColor"
//     >
//         <line x1="2" y1="12" x2="22" y2="12"></line>
//         <polyline points="15,5 22,12 15,19 "></polyline>
//     </g>
// </svg>
//     </button>
// `;

// export const Icon = () => html`
//     <button
//         class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
// <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
// >
//     <g
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         fill="none"
//         stroke="currentColor"
//     >
//         <line x1="12" y1="7" x2="12" y2="17"></line>
//         <line x1="17" y1="12" x2="7" y2="12"></line>
//         <circle cx="12" cy="12" r="11"></circle>
//     </g>
// </svg>
//     </button>
// `;

// import { html } from 'lit';

// export default {
//     title: 'Elements/Forms/Button',
//     tags: ['autodocs'],
// };

// export const Default = () => html`
//     <div class="flex gap-s">
//         <button
//             class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Primary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
//         >
//             Secondary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Tertiary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 hover:bg-primary-100 underline rounded-fab transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//             >
//                 <title>c-add</title>
//                 <g
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     fill="none"
//                     stroke="currentColor"
//                 >
//                     <line
//                         x1="12"
//                         y1="7"
//                         x2="12"
//                         y2="17"
//                         stroke="currentColor"
//                     ></line>
//                     <line
//                         x1="17"
//                         y1="12"
//                         x2="7"
//                         y2="12"
//                         stroke="currentColor"
//                     ></line>
//                     <circle cx="12" cy="12" r="11"></circle>
//                 </g>
//             </svg>
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//             >
//                 <title>c-add</title>
//                 <g
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     fill="none"
//                     stroke="currentColor"
//                 >
//                     <line
//                         x1="12"
//                         y1="7"
//                         x2="12"
//                         y2="17"
//                         stroke="currentColor"
//                     ></line>
//                     <line
//                         x1="17"
//                         y1="12"
//                         x2="7"
//                         y2="12"
//                         stroke="currentColor"
//                     ></line>
//                     <circle cx="12" cy="12" r="11"></circle>
//                 </g>
//             </svg>
//         </button>
//     </div>
// `;

// export const PrimaryButton = () => html`
//     <div class="flex gap-m">
//         <button
//             class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Primary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Primary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-white bg-primary-700 rounded-btn transition-all hover:shadow-lg shadow-md focus-within:ring-2 hover:bg-primary-600 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Primary Button
//         </button></label>
//     </div>
// `;

// export const SecondaryButton = () => html`
//     <div class="flex gap-m">
//         <button
//             class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
//         >
//             Secondary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
//         >
//             Secondary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 rounded-btn transition-all focus-within:ring-2 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-primary-500 border border-primary-700"
//         >
//             Secondary Button
//         </button>
//     </div>
// `;
// export const TertiaryButton = () => html`
//     <div class="flex gap-m">
//         <button
//             class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Tertiary Button
//         </button>
//         <button
//             class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Tertiary Button
//         </button>

//         <button
//             class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//         >
//             Tertiary Button
//         </button>
//     </div>
// `;
// export const IconButton = () => html`
//     <button
//         class="px-xs py-2xs font-body text-white bg-primary-700 underline rounded-fab transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//         >
//             <title>c-add</title>
//             <g
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 fill="none"
//                 stroke="currentColor"
//             >
//                 <line
//                     x1="12"
//                     y1="7"
//                     x2="12"
//                     y2="17"
//                     stroke="currentColor"
//                 ></line>
//                 <line
//                     x1="17"
//                     y1="12"
//                     x2="7"
//                     y2="12"
//                     stroke="currentColor"
//                 ></line>
//                 <circle cx="12" cy="12" r="11"></circle>
//             </g>
//         </svg>
//     </button>
// `;
// export const FAB = () => html`
//     <button
//         class="px-xs py-2xs font-body text-primary-700 underline rounded-btn transition-all focus-within:ring-2 focus:outline-none  focus:ring-offset-2 focus:ring-primary-500"
//     >
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//         >
//             <title>c-add</title>
//             <g
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 fill="none"
//                 stroke="currentColor"
//             >
//                 <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor"></line>
//                 <line x1="17" y1="12" x2="7" y2="12" stroke="currentColor"></line>
//                 <circle cx="12" cy="12" r="11"></circle>
//             </g>
//         </svg>
//     </button>
// `;
