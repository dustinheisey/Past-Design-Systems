/** @jsx jsx */
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { jsx } from 'theme'
import { Link } from 'elements'
import { Flex } from 'layout'

export default () => (
  <Flex alignLeft mt={[4, 3, 3]}>
    <h4 sx={{ mb: 1, color: 'uiLight' }}>Spread The Word</h4>
    <p sx={{ mb: [2, 1, 2] }}>
      RSVP, follow and share the strike with everyone you know!
    </p>
    <Flex
      flexDirection={['column', 'row', 'row']}
      alignItems={['flex-start', 'inherit', 'inherit']}>
      <Link
        a
        to='https://www.facebook.com/events/497186087772656/'
        hoverAccent
        mb={[1, 0, 0]}
        color={'accent'}
        mr={2}>
        <FaFacebookF sx={{ mr: 1, fill: 'accent' }} />
        Facebook
      </Link>
      <Link
        a
        hoverAccent
        to='https://twitter.com/PortlandStrike'
        color={'accent'}
        mr={2}
        mb={[1, 0, 0]}>
        <FaTwitter sx={{ mr: 1, fill: 'accent' }} />
        Twitter
      </Link>
      <Link
        a
        hoverAccent
        to='https://www.instagram.com/portlandclimatestrike/'
        color={'accent'}
        mr={2}
        mb={[1, 0, 0]}>
        <FaInstagram sx={{ mr: 1, fill: 'accent' }} />
        Instagram
      </Link>
    </Flex>
  </Flex>
)
