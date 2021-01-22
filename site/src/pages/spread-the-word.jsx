/** @jsx jsx */
import { jsx } from 'theme'
import Layout from '../regions/layout'
import Intro from '../regions/resources/intro'
import Call from '../regions/resources/call'

export default () => (
  <Layout
    title='Spread The Word - Climate Strike Oregon'
    description='The Oregon Climate Strike needs people like you to share this message and strengthen our people power. Find some resources and ways to share here.'>
    <Intro />
    <Call />
  </Layout>
)
