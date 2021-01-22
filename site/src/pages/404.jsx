/** @jsx jsx */
import { Flex } from 'layout'
import { jsx } from 'theme'
import { Btn } from 'elements'
import Layout from '../regions/layout'

export default () => (
  <Layout
    title='404 - Climate Strike Oregon'
    description="Unfortunately, we couldn't find the page your looking for. Why don't you go back and try another way?">
    <Flex m={5}>
      <h1>404</h1>
      <p sx={{ textAlign: 'center' }}>
        Unfortunately, we couldn't find the page your looking for. Why don't you
        go back and try another way?
      </p>
      <Btn to='/' accent>
        BACK HOME
      </Btn>
    </Flex>
  </Layout>
)
