// const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("dark-mode.js");
  eleventyConfig.addPassthroughCopy("range.js");
  eleventyConfig.addPassthroughCopy("navbar.js");
  eleventyConfig.addPassthroughCopy("assets");
};
