/** @jsx jsx */
import { jsx } from 'theme'
import { Link } from 'elements'
import { Flex } from 'layout'

export default () => (
  <Flex alignLeft justifyLeft>
    <h4 sx={{ color: 'uiLight' }}>Sitemap</h4>
    <Flex alignLeft>
      <Link to='/' hoverAccent color={'uiLight'} mb={1}>
        Home
      </Link>
      <Link hoverAccent to='/register-your-event' color={'uiLight'} mb={1}>
        Register Your Event
      </Link>
      <Link hoverAccent to='/learn-more' color={'uiLight'} mb={1}>
        Learn More
      </Link>
      <Link hoverAccent to='/get-involved' color={'uiLight'} mb={1}>
        Get Involved
      </Link>
      <Link hoverAccent to='/spread-the-word' color={'uiLight'} mb={1}>
        Spread The Word
      </Link>
      <Link hoverAccent to='/join-the-movement' color={'uiLight'} mb={1}>
        Join The Movement
      </Link>
      <Link hoverAccent to='/contact' color={'uiLight'} mb={1}>
        Contact
      </Link>
    </Flex>
  </Flex>
)
