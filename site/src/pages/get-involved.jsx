import { React } from 'theme'
import { Box } from 'layout'
import Layout from '../regions/layout'
import Form from '../regions/get-involved/form'
import Call from '../regions/get-involved/call'

export default () => (
  <Layout
    title='Get Involved - Climate Strike Oregon'
    description='Climate Strike Oregon is youth-led and volunteer-run. We need everyone to help this strike have the impact all of us want it to. Find ways to help here.'>
    <Box
      display='grid'
      gridTemplateColumns={['auto', '.5fr .5fr', '.5fr .5fr']}
      alignItems='start'>
      <Form />
      <Call />
    </Box>
  </Layout>
)
