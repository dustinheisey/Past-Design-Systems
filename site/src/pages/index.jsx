import { React, Stack, Button } from 'styles'
import { Layout } from '../layout/layout'

export default () => (
  <Layout
    title='Index Title - Example Site'
    description='Test Description'
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
