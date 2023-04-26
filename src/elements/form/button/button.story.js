import { html } from 'lit';

/**
 * Button
 */
export default {
    title: 'Elements/Form/Button',

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
