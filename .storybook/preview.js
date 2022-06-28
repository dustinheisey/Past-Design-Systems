import '../src/global/global.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
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
