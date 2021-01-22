/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Btn, Link } from 'elements'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default () => (
  <Flex height={10}>
    <Flex
      alignItems={['flex-start', 'flex-start', 'flex-start']}
      p={[4, 3, 4]}
      bg='uiDark'
      color='uiLight'
      w='100%'
      flex='1'>
      <h2 sx={{ mt: 2, textAlign: ['left', 'left', 'left'] }}>
        Follow and Share With Everyone You Know!
      </h2>
      <Flex
        flexDirection={['column', 'column', 'row']}
        alignItems={['flex-start', 'flex-start', 'inherit']}
        mt={2}>
        <Link
          a
          to='https://www.facebook.com/events/497186087772656/'
          hoverAccent
          mr={2}
          mb={[1, 1, 0]}
          color='accent'>
          <FaFacebookF sx={{ mr: 1, fill: 'accent' }} />
          Facebook
        </Link>
        <Link
          a
          hoverAccent
          to='https://twitter.com/PortlandStrike'
          mr={2}
          mb={[1, 1, 0]}
          color='accent'>
          <FaTwitter sx={{ mr: 1, fill: 'accent' }} />
          Twitter
        </Link>
        <Link
          a
          hoverAccent
          to='https://www.instagram.com/portlandclimatestrike/'
          mr={2}
          mb={[1, 1, 0]}
          color='accent'>
          <FaInstagram sx={{ mr: 1, fill: 'accent' }} />
          Instagram
        </Link>
      </Flex>
    </Flex>
    <Flex
      alignItems={['flex-start', 'flex-start', 'flex-start']}
      p={[4, 3, 4]}
      width='100%'
      bg='accent'
      flex='1'>
      <h2 sx={{ textAlign: ['left', 'left', 'left'] }}>
        Donate to help the Portland Strike!
      </h2>
      <Btn
        a
        to='https://www.gofundme.com/f/portland-youth-climate-strike-2019'
        mt={2}
        md>
        DONATE NOW
      </Btn>
    </Flex>
  </Flex>
)
