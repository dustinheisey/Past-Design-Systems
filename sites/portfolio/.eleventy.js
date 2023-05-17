const Nunjucks = require("nunjucks");
const Image = require("@11ty/eleventy-img");

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) => {
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(imageMetadata, imageAttributes);
};

const svgShortcode = async (src, alt, sizes) => {
  let metadata = await Image(src, {
    formats: ["svg"],
    dryRun: true,
  });
  return metadata.svg[0].buffer.toString();
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("svg", svgShortcode);

  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(["./", "_includes", "_layouts"]),
    {
      lstripBlocks: true,
      trimBlocks: true,
    }
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addPlugin(require("./_11ty/optimize-html.js"));

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("js/dark-mode.js");
  eleventyConfig.addPassthroughCopy("js/range.js");
  eleventyConfig.addPassthroughCopy("js/navbar.js");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
