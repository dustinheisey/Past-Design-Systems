import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { post } = pageRegions
const sections = Object.keys(post)

export default {
  title: 'Pages/Post',
  argTypes: computeArgTypes(post, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    docs: {
      source: {
        transform: (src, story) => computeDocs('post', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(post, sections, args)
