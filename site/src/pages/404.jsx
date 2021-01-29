import { React, Button, Stack } from 'styles'
import { Layout } from '../regions/layout'

export default () => (
  <Layout
    title='404 - Climate Strike Oregon'
    description="Unfortunately, we couldn't find the page your looking for. Why don't you go back and try another way?"
  >
    <Stack gap={'xs'}>
      <h1>404</h1>
      <p>
        Unfortunately, we couldn't find the page your looking for. Why
        don't you go back and try another way?
      </p>
      <Button to='/' accent>
        BACK HOME
      </Button>
    </Stack>
  </Layout>
)
