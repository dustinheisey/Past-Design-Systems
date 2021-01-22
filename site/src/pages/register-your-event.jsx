/** @jsx jsx */
import { jsx } from 'theme'
import Layout from '../regions/layout'
import Register from '../regions/contact/register/form'
export default () => (
  <Layout
    title='Register Your Event - Climate Strike Oregon'
    description='If you are holding an event or taking action against climate change anywhere in Oregon, please register your event here.'>
    <Register />
  </Layout>
)
