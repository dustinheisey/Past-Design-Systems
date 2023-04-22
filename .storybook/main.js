/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-pseudo-states',
        '@storybook/addon-styling',
        'storybook-addon-rem',
    ],
    framework: {
        name: '@storybook/web-components-vite',
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
