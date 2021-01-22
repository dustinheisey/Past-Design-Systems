/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Link } from 'elements'

import Logo from '../../../assets/illustrations/logo.svg'

export default () => (
  <Flex p={3}>
    <Link to='/'>
      <img src={Logo} sx={{ margin: 0 }} alt='Logo' />
    </Link>
    <Flex row justifyEvenly mt={2}>
      <Link to='/' mr={2} hoverAccent>
        Home
      </Link>
      <Link to='/register-your-event' mr={2} hoverAccent>
        Register Your Event
      </Link>
      <Link to='/learn-more' mr={2} hoverAccent>
        Learn More
      </Link>
      <Link to='/get-involved' mr={2} hoverAccent>
        Get Involved
      </Link>
      <Link to='/spread-the-word' mr={2} hoverAccent>
        Spread The Word
      </Link>
      <Link to='/join-the-movement' mr={2} hoverAccent>
        Join The Movement
      </Link>
      <Link to='/contact' mr={2} hoverAccent>
        Contact
      </Link>
    </Flex>
  </Flex>
)
