import { React, Stack, Button } from 'styles'
import { Layout } from '../regions/layout'

export default () => (
  <Layout
    title='Home - Climate Strike Oregon'
    index
    description='Climate Strike Oregon is the hub for information about the strike, events, and actions that are happening, and ways to get involved'
  >
    <Stack gap='md'>
      <Button to='/404' variant='primary'>
        Primary Button
      </Button>
      <Button variant='outline' size='lg'>
        Outline Button
      </Button>
      <Button variant='danger' size='sm'>
        Danger Button
      </Button>
      <Button variant='text'>Text Button</Button>
    </Stack>
  </Layout>
)
