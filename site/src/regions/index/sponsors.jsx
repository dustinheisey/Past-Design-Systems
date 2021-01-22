/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Link } from 'elements'
import PortlandProductions from '../../assets/images/logos/sponsors/portland-productions.png'

export default () => (
  <Flex p={2} m={3} alignItems={['center', 'flex-start', 'flex-start']}>
    <h2>Our Sponsors</h2>
    <Flex row justifyContent={['center', 'flex-start', 'flex-start']} mt={2}>
      <Link
        a
        to='http://www.portlandproductions.net'
        mr={3}
        display='flex'
        flexDirection='column'
        alignItems={['center', 'flex-start', 'flex-start']}>
        <img
          src={PortlandProductions}
          alt='Portland Productions'
          sx={{ width: ['20vh', '10vh', '15vh'], mb: 1 }}
        />
        <Link a to='http://www.portlandproductions.net' hoverAccent>
          <h4 sx={{ textAlign: ['center', 'start', 'start'] }}>
            Portland
            <br />
            Productions
          </h4>
        </Link>
      </Link>
    </Flex>
  </Flex>
)
