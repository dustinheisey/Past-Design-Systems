/** @jsx jsx */
import { jsx } from 'theme'
import { Box, Flex } from 'layout'

export default () => (
  <Box>
    <Flex width={10} p={3}>
      <h1 sx={{ p: 2 }}>Get Involved</h1>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSfQlyk_tA4p8rQLyP9bctLpg9uhk0_pYSwrbESV_b2YoyRc8w/viewform?embedded=true'
        width='100%'
        height='750'
        frameborder='0'
        marginheight='0'
        marginwidth='0'
        title='Volunteer Form'>
        Loading…
      </iframe>
    </Flex>
  </Box>
)
