module.exports = {
    stories: ['../src/components/**/*.story.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-postcss'
    ],
    framework: '@storybook/html',
    core: {
        disableTelemetry: true
    }
};
