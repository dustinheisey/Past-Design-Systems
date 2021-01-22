/** @jsx jsx */
import { jsx } from 'theme'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Flex, Row, Col } from 'layout'
import { Btn, Link } from 'elements'

export default () => (
  <Row gridGap={[0, 0, 3]}>
    <Col span='7' alignItems='center'>
      <Flex alignLeft p={4} m={[0, 0, 4]} mr={[0, 0, 0]} bg='accent'>
        <h2>Flyers, Posters, Resources</h2>
        <Btn
          a
          to='https://drive.google.com/drive/folders/1ihAwgtaKuzmq0BOk_Ow3zGc6AB5xGJ5i'>
          SEE RESOURCES
        </Btn>
      </Flex>
    </Col>
    <Col span='5'>
      <Flex
        alignLeft
        p={4}
        m={[0, 0, 4]}
        ml={[0, 0, 0]}
        bg='uiDark'
        color='uiLight'>
        <h2 sx={{ mt: 2 }}>Follow and Share With Everyone You Know!</h2>
        <Flex
          flexDirection={['column', 'row', 'row']}
          justifyContent={['center', 'flex-start', 'start']}
          alignItems={['flex-start', 'center', 'center']}
          mt={2}
          mb={2}>
          <Link
            a
            to='https://www.facebook.com/events/497186087772656/'
            hoverAccent
            mr={2}
            mb={[1, 0, 0]}
            color={['accent', 'accent', 'accent']}>
            <FaFacebookF sx={{ mr: 1 }} />
            Facebook
          </Link>
          <Link
            a
            hoverAccent
            to='https://twitter.com/PortlandStrike'
            mr={2}
            mb={[1, 0, 0]}
            color='accent'>
            <FaTwitter sx={{ mr: 1 }} />
            Twitter
          </Link>
          <Link
            a
            hoverAccent
            to='https://www.instagram.com/portlandclimatestrike/'
            mr={2}
            mb={[1, 0, 0]}
            color='accent'>
            <FaInstagram sx={{ mr: 1 }} />
            Instagram
          </Link>
        </Flex>
      </Flex>
    </Col>
  </Row>
)
