const Image = require('@11ty/eleventy-img')
const path = require('path')
const { promisify } = require('util')
const { DateTime } = require('luxon')
const fs = require('fs')
const { PurgeCSS } = require('purgecss')
const purgeCssFromHtml = require('purgecss-from-html')
const stat = promisify(fs.stat)
const minify = require('html-minifier').minify
const csso = require('csso')
const pluginPWA = require('eleventy-plugin-pwa-v2')
const pluginNavigation = require('@11ty/eleventy-navigation')
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const execFile = promisify(require('child_process').execFile)
const svgSprite = require('eleventy-plugin-svg-sprite')

module.exports = function (eleventyConfig) {
  // ? Plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
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
  eleventyConfig.addLayoutAlias('post', 'post.njk')
  eleventyConfig.addLayoutAlias('category', 'category.njk')

  // ? Passthrough Copies
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy({ icons: '/icons' })
  eleventyConfig.addPassthroughCopy({ '../../scripts/index.min.js': 'index.min.js' })

  // ? Watch Targets
  eleventyConfig.addWatchTarget('../../scripts/index.min.js')
  eleventyConfig.addWatchTarget('./posts/*.md')
  eleventyConfig.addWatchTarget('../../styles/style.min.css')
  eleventyConfig.addWatchTarget('../../macros/**/*.njk')
  eleventyConfig.addWatchTarget('./public/*')

  // ? Filters
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })
  eleventyConfig.addFilter('tagsOnly', (tag) => {
    return tag.filter((item) => item !== 'post')
  })
  eleventyConfig.addFilter('getCategory', (categories, categoryTag) => {
    let postCategory = categoryTag.find((item) => item !== 'post')
    return categories.find((item) => item.data.label === postCategory)
  })
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy')
  })

  async function lastModifiedDate(filename) {
    try {
      const { stdout } = await execFile('git', ['log', '-1', '--format=%cd', filename])
      return new Date(stdout)
    } catch (e) {
      console.error(e.message)
      // Fallback to stat if git isn't working.
      const stats = await stat(filename)
      return stats.mtime // Date
    }
  }
  // Cache the lastModifiedDate call because shelling out to git is expensive.
  // This means the lastModifiedDate will never change per single eleventy invocation.
  const lastModifiedDateCache = new Map()
  eleventyConfig.addNunjucksAsyncFilter('lastModifiedDate', function (filename, callback) {
    const call = (result) => {
      result.then((date) => callback(null, date))
      result.catch((error) => callback(error))
    }
    const cached = lastModifiedDateCache.get(filename)
    if (cached) {
      return call(cached)
    }
    const promise = lastModifiedDate(filename)
    lastModifiedDateCache.set(filename, promise)
    call(promise)
  })

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkAfterHeader({
      assistiveText: (title) => `Permalink to “${title}”`,
      visuallyHiddenClass: 'sr-only',
      wrapper: ['<div class="inline-header">', '</div>']
    }),
    permalinkSymbol: '#'
  })
  eleventyConfig.setLibrary('md', markdownLibrary)

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
