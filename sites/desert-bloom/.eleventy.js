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
  eleventyConfig.addPlugin(faviconsPlugin, {
    outputDir: './site',
    manifestData: {
      name: 'Desert Bloom Initiative - Fighting Desertification',
      short_name: 'Desert Bloom',
      description:
        'Desert Bloom Initiative is a committed organization dedicated to combating desertification and transforming barren lands into thriving ecosystems. Through research, community engagement, partnerships, and practical projects, we strive for a greener, more sustainable future. Join us in our fight against desertification.',
      theme_color: '#a73824',
      background_color: '#a73824',
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
      'font-src': ['self'],
      'script-src-elem': ['self', 'cdn.usefathom.com', 'unpkg.com/website-carbon-badges@1.1.3/b.min.js'],
      'style-src-elem': ['self', 'unsafe-inline']
    },
    globPatternsDetach: ['/*.png', '/*.jpeg', '/*.webp'],
    includePatterns: ['/**/**.html']
  })
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://desert-bloom.dustinheisey.com'
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
      Image(src, options)

      let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async'
      }
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
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')

  // ? Passthrough Copies
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy({ '../../styles/style.min.css': 'style.min.css' })
  eleventyConfig.addPassthroughCopy({ 'data/theme.css': 'theme.css' })
  eleventyConfig.addPassthroughCopy({ '../../scripts/index.min.js': 'index.min.js' })

  // ? Watch Targets
  eleventyConfig.addWatchTarget('../../scripts/index.min.js')
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
      includes: '../../macros'
    }
  }
}
