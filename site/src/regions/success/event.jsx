/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Btn } from 'elements'

export default () => (
  <Flex p={4} m='auto' my={4} bg='uiDark' color='uiLight' alignLeft width={8}>
    <h4 sx={{ marginBottom: 1 }}>Registration Successful</h4>
    <h1>Thanks</h1>
    <p sx={{ marginBottom: 3 }}>Thank you for registering your event. Events need to be manually entered so you can expect to have the entry up in about a day.</p>
    <Btn to='/' accent>
      BACK HOME
    </Btn>
  </Flex>
)
