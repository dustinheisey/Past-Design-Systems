/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-styling",
    "storybook-dark-mode",
    "storybook-addon-pseudo-states",
    "storybook-addon-rem",
  ],
  framework: {
    name: "@storybook/web-components-vite",
  },
  docs: {
    autodocs: true,
  },
};
export default config;
