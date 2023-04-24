import '../dist/index.css';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
            attributeName: 'data-mode',
        }),
    ],
};
