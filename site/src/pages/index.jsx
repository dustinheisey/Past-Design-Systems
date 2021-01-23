import { React, Masonry, Box } from 'styles'
import { Layout } from '../regions/layout'

export default () => (
  <Layout
    title='Home - Climate Strike Oregon'
    index
    description='Climate Strike Oregon is the hub for information about the strike, events, and actions that are happening, and ways to get involved'
  >
    <h1 mb='md'>Hello World</h1>
    <Masonry col='2' gap='md'>
      <Box w='200px' h='300px' bg='black'></Box>
      <Box w='200px' h='400px' bg='black'></Box>
      <Box w='200px' h='300px' bg='black'></Box>
      <Box w='200px' h='600px' bg='black'></Box>
      <Box w='200px' h='200px' bg='black'></Box>
      <Box w='200px' h='300px' bg='black'></Box>
      <Box w='200px' h='700px' bg='black'></Box>
    </Masonry>
  </Layout>
)
