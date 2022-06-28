module.exports = {
    stories: [
        {
            directory: '../src/global/',
            titlePrefix: 'Global/',
            files: '**/*.story.*'
        },
        {
            directory: '../src/components/containers/stories',
            titlePrefix: 'Containers/',
            files: '*.story.*'
        },
        {
            directory: '../src/components/feedback/stories',
            titlePrefix: 'Feedback/',
            files: '*.story.*'
        },
        {
            directory: '../src/components/inputs/stories',
            titlePrefix: 'Inputs/',
            files: '*.story.*'
        },
        {
            directory: '../src/components/media/stories',
            titlePrefix: 'Media/',
            files: '*.story.*'
        },
        {
            directory: '../src/components/status/stories',
            titlePrefix: 'Status/',
            files: '*.story.*'
        },
        {
            directory: '../src/components/typography/stories',
            titlePrefix: 'Typography/',
            files: '*.story.*'
        },
        {
            directory: '../src/patterns/stories',
            titlePrefix: 'Patterns/',
            files: '*.story.*'
        },
        {
            directory: '../src/regions/',
            titlePrefix: 'Regions/',
            files: '**/*.story.*'
        }
    ],
    addons: [
        'storybook-design-token',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss'
    ],
    framework: '@storybook/html',
    core: {
        disableTelemetry: true,
        builder: '@storybook/builder-vite'
    }
};
