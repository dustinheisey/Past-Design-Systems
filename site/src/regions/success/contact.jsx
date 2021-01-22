/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Btn } from 'elements'

export default () => (
  <Flex p={4} m='auto' my={4} bg='uiDark' color='uiLight' alignLeft width={8}>
    <h4 sx={{ marginBottom: 1 }}>Contact Successful</h4>
    <h1>Thanks!</h1>
    <p sx={{ marginBottom: 3 }}>
    Thank you for reaching out to get more info and to help Climate Strike Oregon. We will get back to you ASAP!
    </p>
    <Btn to='/' accent>
      BACK HOME
    </Btn>
  </Flex>
)
