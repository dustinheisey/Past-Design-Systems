const Image = require('@11ty/eleventy-img')
const path = require('path')
const fs = require('fs')
const { PurgeCSS } = require('purgecss')
const purgeCssFromHtml = require('purgecss-from-html')
const minify = require('html-minifier').minify
const csso = require('csso')
const pluginPWA = require('eleventy-plugin-pwa-v2')
const pluginNavigation = require('@11ty/eleventy-navigation')
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const svgSprite = require('eleventy-plugin-svg-sprite')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')

module.exports = function (eleventyConfig) {
  // ? Plugins
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
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
        widths: [400, 800, 1280],
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

  eleventyConfig.addShortcode('svg', function (file) {
    let relativeFilePath = `${file}.svg`
    let data = fs.readFileSync(relativeFilePath, function (err, contents) {
      if (err) return err
      return contents
    })

    return data.toString('utf8')
  })

  // ? Transforms
  eleventyConfig.addTransform('purge-and-inline-css', async (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const purgeCssResult = await new PurgeCSS().purge({
        content: [{ raw: content, extension: 'html' }],
        css: ['../../styles/style.min.css'],
        extractors: [
          {
            extractor: purgeCssFromHtml,
            extensions: ['html']
          }
        ]
      })

      const after = csso.minify(purgeCssResult[0].css).css
      return content.replace('<!-- INLINE CSS -->', `<style> ${after} </style>`)
    }
    return content
  })
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
  eleventyConfig.addPassthroughCopy({ '../../scripts/index.min.js': 'index.min.js' })

  // ? Watch Targets
  eleventyConfig.addWatchTarget('../../scripts/index.min.js')
  eleventyConfig.addWatchTarget('../../styles/style.min.css')
  eleventyConfig.addWatchTarget('../../macros/**/*.njk')
  eleventyConfig.addWatchTarget('./public/*')

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
