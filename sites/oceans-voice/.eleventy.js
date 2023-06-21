const Image = require('@11ty/eleventy-img')
const path = require('path')
const fs = require('fs')
const minify = require('html-minifier').minify
const pluginPWA = require('eleventy-plugin-pwa-v2')
const pluginNavigation = require('@11ty/eleventy-navigation')
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const svgSprite = require('eleventy-plugin-svg-sprite')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const cspPlugin = require('@jackdbd/eleventy-plugin-content-security-policy')
const CleanCSS = require('clean-css')
const faviconsPlugin = require('eleventy-plugin-gen-favicons')

module.exports = function (eleventyConfig) {
  // ? Plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
  // eleventyConfig.addPlugin(eleventyHTMLValidate)
  // eleventyConfig.addPlugin(logicalContentFlow)
  // eleventyConfig.addPlugin(EleventyVitePlugin)
  eleventyConfig.addPlugin(faviconsPlugin, {
    outputDir: './site',
    manifestData: {
      name: "Ocean's Voice - Ocean Conservation Nonprofit",
      short_name: "Ocean's Voice",
      description:
        "Ocean's Voice is a nonprofit organization dedicated to protecting and restoring the world's oceans. We conduct research, advocate for policy change, educate the public, and lead conservation initiatives. Join us in creating a future where our oceans thrive.",
      theme_color: '#01658D',
      background_color: '#F8FDFF',
      display: 'fullscreen',
      start_url: '/',
      scope: '/',
      orientation: 'portrait',
      display_override: ['window-control-overlay', 'fullscreen', 'standalone', 'browser']
    }
  })
  eleventyConfig.addPlugin(cspPlugin, {
    allowDeprecatedDirectives: true,

    directives: {
      'base-uri': ['self'],

      // allow only self-hosted fonts (i.e. fonts hosted on this origin)
      'font-src': ['self'],

      // allow scripts hosted on this origin, on plausible.io (analytics),
      // cloudflareinsights.com (analytics), unpkg.com (preact)
      'script-src-elem': ['self', 'cdn.usefathom.com', 'unpkg.com/website-carbon-badges@1.1.3/b.min.js'],

      // allow CSS hosted on this origin, and inline styles that match a sha256
      // hash automatically computed at build time by this 11ty plugin.
      // See also here for the pros and cons of 'unsafe-inline'
      // https://stackoverflow.com/questions/30653698/csp-style-src-unsafe-inline-is-it-worth-it
      'style-src-elem': ['self', 'unsafe-inline']
    },

    // Only .html files should be served with the Content-Security-Policy header. Avoid header bloat by making sure that other files are not served with Content-Security-Policy header.
    globPatternsDetach: ['/*.png', '/*.jpeg', '/*.webp'],
    includePatterns: ['/**/**.html']
  })
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://oceans-voice.dustinheisey.com'
    }
  })

  eleventyConfig.addPlugin(svgSprite, {
    path: '../../public/icons',
    globalClasses: 'icon',
    svgSpriteShortcode: 'iconsprite',
    svgShortcode: 'icon'
  })
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: './site/sw.js',
    globDirectory: './site',
    sourcemap: false,
    inlineWorkboxRuntime: true
  })

  // ? Global Data
  eleventyConfig.addGlobalData('permalink', () => {
    return (data) => `${data.page.filePathStem.substring(10)}.${data.page.outputFileExtension}`
  })

  // ? Collections
  eleventyConfig.addCollection('templates', (collectionApi) => {
    const macroImport = `{% from "../../../macros/region.njk" import action, copy, faq, feature, footer, form, gallery, header, hero, intro, logos, pricing, stats, testimonials, timeline %}`
    let collection = collectionApi.getFilteredByGlob('./templates/*.njk')
    collection.forEach((item) => {
      item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
    })
    return collection
  })
  eleventyConfig.addCollection('sub-templates', (collectionApi) => {
    const macroImport = `{% from "../../../../macros/region.njk" import action, copy, faq, feature, footer, form, gallery, header, hero, intro, logos, pricing, stats, testimonials, timeline %}`
    let collection = collectionApi.getFilteredByGlob('./templates/*/*.njk')
    collection.forEach((item) => {
      item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
    })
    return collection
  })

  // ? Shortcodes
  eleventyConfig.addNunjucksShortcode('img', function (src, alt, cls, sizes = '100vw', widths) {
    try {
      let options = {
        widths: [400, 800, 1280, null],
        formats: ['webp', 'jpeg'],
        outputDir: './site/img/',
        filenameFormat: function (id, src, width, format, options) {
          const extension = path.extname(src)
          const name = path.basename(src, extension)

          return `${name}-${width}w.${format}`
        }
      }

      // generate images, while this is async we don’t wait
      Image(src, options)

      let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async'
      }
      // get metadata even if the images are not fully generated yet
      let metadata = Image.statsSync(src, options)
      return Image.generateHTML(metadata, imageAttributes)
    } catch (error) {
      console.log(error)
    }
  })

  eleventyConfig.addShortcode('svg', function (file, classes) {
    try {
      let relativeFilePath = `${file}.svg`
      let data = fs.readFileSync(relativeFilePath, function (err, contents) {
        if (err) return err
        return contents
      })
      let svg = data.toString('utf8')
      if (classes) {
        return svg.replace('<svg', `<svg class="${classes}"`)
      }
      return svg
    } catch (error) {
      console.log(error)
    }
  })

  // ? Transforms
  eleventyConfig.addTransform('minify-html', (rawContent, outputPath) => {
    let content = rawContent
    if (outputPath && outputPath.endsWith('.html')) {
      content = minify(content, {
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        sortClassName: true,
        sortAttributes: true,
        html5: true,
        decodeEntities: true,
        removeOptionalTags: true
      })
    }
    return content
  })

  // ? Layout Aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk')

  // ? Passthrough Copies
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy({ icons: '/icons' })
  eleventyConfig.addPassthroughCopy({ '../../styles/style.min.css': 'style.min.css' })
  eleventyConfig.addPassthroughCopy({ 'theme.css': 'theme.css' })
  eleventyConfig.addPassthroughCopy({ '../../scripts/index.min.js': 'index.min.js' })

  // ? Watch Targets
  eleventyConfig.addWatchTarget('../../scripts/index.min.js')
  eleventyConfig.addWatchTarget('./posts/*.md')
  eleventyConfig.addWatchTarget('../../styles/style.min.css')
  eleventyConfig.addWatchTarget('../../macros/**/*.njk')
  eleventyConfig.addWatchTarget('./public/*')

  // ? Filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  return {
    dir: {
      input: '.',
      output: 'site',
      data: 'data',
      includes: '../../macros',
      layouts: 'layouts'
    }
  }
}
