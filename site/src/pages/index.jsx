/** @jsx jsx */
import { jsx } from 'theme'
import Action from '../regions/week-of-action/action'
import Layout from '../regions/layout'
import Video from '../regions/index/video'
import Intro from '../regions/index/intro'
import Call from '../regions/index/call'
import Sponsors from '../regions/index/sponsors'

export default () => (
  <Layout
    title='Home - Climate Strike Oregon'
    index
    description='Climate Strike Oregon is the hub for information about the strike, events, and actions that are happening, and ways to get involved'>
    <Video />
    <Action />
    <Intro />
    {/* <Blurbs /> */}
    <Call />
    <Sponsors />
  </Layout>
)
