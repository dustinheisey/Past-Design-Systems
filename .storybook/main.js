module.exports = {
    stories: [
        {
            directory: '../src/components/containers/stories',
            titlePrefix: 'Containers/',
            files: '*.story.*'
        },
        {
            directory: '../src/global/styleguide',
            titlePrefix: 'Style Guide/',
            files: '*.story.*'
        }
    ],
    addons: [
        'storybook-design-token',
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
