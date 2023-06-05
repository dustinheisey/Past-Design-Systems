const nunjucks = require('nunjucks/browser/nunjucks-slim')

class IconTag {
  constructor() {
    this.tags = ['icon']
  }

  parse(parser, nodes) {
    const token = parser.nextToken()
    const args = parser.parseSignature(null, true)
    parser.advanceAfterBlockEnd(token.value)

    return new nodes.CallExtension(this, 'run', args)
  }

  run(context, url, alt = '') {
    return `<img src="/public/icons/${url}.svg" alt="${alt}">`
  }
}

module.exports = new IconTag()
