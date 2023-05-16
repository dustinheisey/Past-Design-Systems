const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 1200],
    formats: ["avif", "webp", "jpeg"],
    urlPath: "/assets/images",
    outputDir: "./_site/assets",
  });

  let image = Image.generateHTML(metadata, {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  });

  return image;
}

function svgShortcode(src, alt, className) {
  return `<img src="${src}" alt="${alt}" class="${className || ""}">`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("navigation", "./_data/navigation.json");

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("svg", svgShortcode);

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("service-worker.js");
  eleventyConfig.addPassthroughCopy("dark-mode.js");
  eleventyConfig.addPassthroughCopy("range.js");
  eleventyConfig.addPassthroughCopy("navbar.js");
  eleventyConfig.addPassthroughCopy("assets");
};
