module.exports = {
    stories: [
        {
            directory: '../src/components/containers/stories',
            titlePrefix: 'Containers/',
            files: '*.story.*'
        }
    ],
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
