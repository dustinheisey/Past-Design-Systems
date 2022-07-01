import '../src/global/global.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { hideNoControlsWarning: true, expanded: true },
    layout: 'centered',
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#FAFAFA'
            },
            {
                name: 'dark',
                value: '#121212'
            }
        ]
    },
    options: {
        storySort: {
            order: [
                'Global',
                'Containers',
                'Typography',
                'Media',
                'Inputs',
                'Status',
                'Feedback',
                'Patterns',
                'Regions'
            ]
        }
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
