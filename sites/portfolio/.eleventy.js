const Image = require('@11ty/eleventy-img')
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

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: './_site/sw.js',
    globDirectory: './_site',
    sourcemap: false,
    inlineWorkboxRuntime: true
  })

  eleventyConfig.addNunjucksAsyncShortcode(
    'image',
    async (
      src,
      alt,
      className = undefined,
      widths = [400, 800, 1280],
      formats = ['webp', 'jpeg'],
      sizes = '100vw'
    ) => {
      const imageMetadata = await Image(src, {
        widths: [...widths, null],
        formats: [...formats, null],
        urlPath: '/assets/',
        outputDir: './_site/assets/'
      })

      const imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async'
      }

      return Image.generateHTML(imageMetadata, imageAttributes)
    }
  )
  eleventyConfig.addNunjucksAsyncShortcode('svg', async (src) => {
    let metadata = await Image(src, {
      formats: ['svg'],
      dryRun: true
    })
    return metadata.svg[0].buffer.toString()
  })

  eleventyConfig.addTransform(
    'purge-and-inline-css',
    async (content, outputPath) => {
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
        return content.replace(
          '<!-- INLINE CSS -->',
          `<style> ${after} </style>`
        )
      }
      return content
    }
  )

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

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  eleventyConfig.addLayoutAlias('category', 'layouts/category.njk')

  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addWatchTarget('./index.js')
  eleventyConfig.addWatchTarget('../../styles/style.min.css')

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
      const { stdout } = await execFile('git', [
        'log',
        '-1',
        '--format=%cd',
        filename
      ])
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
  eleventyConfig.addNunjucksAsyncFilter(
    'lastModifiedDate',
    function (filename, callback) {
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
    }
  )

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
      output: '_site',
      data: '_data',
      includes: '_includes'
    }
  }
}
