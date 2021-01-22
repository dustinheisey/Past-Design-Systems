/** @jsx jsx */
import { jsx } from 'theme'
import Layout from '../regions/layout'
import Intro from '../regions/movement/intro'
import Grid from '../regions/movement/grid'
import Form from '../regions/contact/google-form'

export default () => (
  <Layout
    title='Join The Movement - Climate Strike Oregon'
    description="Our fight against climate change can't end with this strike. Use this page to find groups to join.">
    <Intro />
    <Grid />
    <Form />
  </Layout>
)
