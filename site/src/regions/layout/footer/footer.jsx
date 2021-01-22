import { React } from 'theme'
import { Flex, Box, Footer } from 'layout'

import Blurb from './blurb'
import Social from './social'
import List from './list'
import Copywrite from './copywrite'

export default () => (
  <Footer>
    <Flex
      row
      justifyBetween
      alignLeft
      px={[3, 4, 4]}
      pt={[4, 4, 4]}
      bg={'uiDark'}
      color={'uiLight'}>
      <Flex alignLeft mb={[4, 3, 0]}>
        <Blurb />
        <Social />
      </Flex>
      <Box mb={[0, 3, 0]}>
        <List />
      </Box>
    </Flex>
    <Copywrite />
  </Footer>
)
