const Nunjucks = require("nunjucks");
const Image = require("@11ty/eleventy-img");
const { PurgeCSS } = require("purgecss");
const purgeCssFromHtml = require("purgecss-from-html");
const minify = require("html-minifier").minify;
const csso = require("csso");
const eleventyHTMLValidate = require("eleventy-plugin-html-validate");
const pluginPWA = require("eleventy-plugin-pwa-v2");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });

  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async (
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
        urlPath: "/assets/",
        outputDir: "./_site/assets/",
      });

      const imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(imageMetadata, imageAttributes);
    }
  );
  eleventyConfig.addNunjucksAsyncShortcode("svg", async (src) => {
    let metadata = await Image(src, {
      formats: ["svg"],
      dryRun: true,
    });
    return metadata.svg[0].buffer.toString();
  });

  eleventyConfig.addPlugin(eleventyHTMLValidate);
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: "./_site/sw.js",
    globDirectory: "./_site",
    sourcemap: false,
    inlineWorkboxRuntime: true,
  });

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addTransform(
    "purge-and-inline-css",
    async (content, outputPath) => {
      if (outputPath && outputPath.endsWith(".html")) {
        const purgeCssResult = await new PurgeCSS().purge({
          content: [{ raw: content, extension: "html" }],
          css: ["./style.css"],
          // extractors: [
          //   {
          //     extractor: purgeCssFromHtml,
          //     extensions: ["html"],
          //   },
          // ],
        });

        const after = csso.minify(purgeCssResult[0].css).css;
        return content.replace(
          "<!-- INLINE CSS -->",
          `<style> ${after} </style>`
        );
      }
      return content;
    }
  );

  eleventyConfig.addTransform("minify-html", (rawContent, outputPath) => {
    let content = rawContent;
    if (outputPath && outputPath.endsWith(".html")) {
      content = minify(content, {
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        sortClassName: true,
        sortAttributes: true,
        html5: true,
        decodeEntities: true,
        removeOptionalTags: true,
      });
    }
    return content;
  });

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
