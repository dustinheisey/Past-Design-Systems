export default {
  stories: ["../src/**/*.mdx", "../src/**/*.story.js"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-styling",
    "storybook-addon-rem",
    "addon-screen-reader",
  ],
  framework: {
    name: "@storybook/web-components-vite",
  },
  docs: {
    autodocs: true,
  },
};
