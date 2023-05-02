import "../src/style.css";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import { themes } from "@storybook/theming";
import { html } from "lit";

setCustomElementsManifest(customElements);

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  docs: {
    theme: themes.dark,
  },
  parameters: {
    backgrounds: {
      disable: true,
    },
    darkMode: {
      darkClass: "mode-dark",
      lightClass: "mode-light",
      stylePreview: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      storySort: {
        order: [
          "Tokens",
          "Elements",
          "Layouts",
          "Components",
          "Regions",
          "Templates",
        ],
      },
    },
  },
  // decorators: [
  //   (story) =>
  //     html`<div
  //       style="width: 50vw; height: 50vh; background: var(--color-background); display: grid; justify-items: center; padding: var(--space-xl)"
  //     >
  //       ${story()}
  //     </div>`,
  // ],
};
