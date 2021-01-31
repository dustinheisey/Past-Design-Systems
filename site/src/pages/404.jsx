import { React, Button, Stack } from 'styles'
import { Layout } from '../layout/layout'

export default () => (
  <Layout
    title='404 - Example Site'
    description='Example Description'
  >
    <Stack gap={'xs'}>
      <h1>404</h1>
      <p>
        Unfortunately, we couldn't find the page your looking for. Why
        don't you go back and try another way?
      </p>
      <Button to='/' variant='outline'>
        BACK HOME
      </Button>
    </Stack>
  </Layout>
)
