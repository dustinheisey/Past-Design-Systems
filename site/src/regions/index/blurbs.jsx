/** @jsx jsx */
import { Flex, Box } from 'layout'
import { Link } from 'elements'
import { jsx } from 'theme'

export default () => (
  <Box columns={[1, 1, 3]} p={3} gap={3}>
    <Flex
      alignLeft
      width={10}
      height={10}
      p={4}
      bg='uiLight'
      mb={[3, 3, 0]}
    >
      <h3>Our Demands</h3>
      <p>
        Earlier this year, Greta Thunberg and 46 other youth
        Earlier this year, Greta Thunberg and 46 other youth
      </p>
      <Link color='accent' to='/our-demands'>
        Read More
      </Link>
    </Flex>
    <Flex
      alignLeft
      width={10}
      height={10}
      p={4}
      bg='uiLight'
      mb={[3, 3, 0]}
    >
      <h3>Spread the Word</h3>
      <p>
        activists issued a call to everyone around the globe
        Earlier this year, Greta Thunberg and 46 other youth
      </p>
      <Link color='accent' to='/spread-the-word'>
        Read More
      </Link>
    </Flex>
    <Flex
      alignLeft
      width={10}
      height={10}
      p={4}
      bg='uiLight'
      mb={[3, 3, 0]}
    >
      <h3>What's Next</h3>
      <p>
        to join them in a massive climate strike on
        v\Earlier this year, Greta Thunberg and 46 other
        youth
      </p>
      <Link color='accent' to='whats-next'>
        Read More More
      </Link>
    </Flex>
  </Box>
)
