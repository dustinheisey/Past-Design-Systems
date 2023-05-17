// const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(EleventyVitePlugin);

  const nunjucksEnvironment = new Nunjucks.Environment(
    // Specify the directories where your templates reside.
    new Nunjucks.FileSystemLoader(["./", "_includes", "_layouts"]),

    // Apply rendering options
    {
      lstripBlocks: true,
      trimBlocks: true,
    }
  );

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("dark-mode.js");
  eleventyConfig.addPassthroughCopy("range.js");
  eleventyConfig.addPassthroughCopy("navbar.js");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    dir: {
      // These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
