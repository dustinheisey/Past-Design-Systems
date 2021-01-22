import { React } from 'theme'
import { slide as Menu } from 'react-burger-menu'
import { Flex, Box } from 'layout'
import { Link } from 'elements'

import Logo from '../../../assets/illustrations/logoMobile.svg'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '4vh',
    top: '4vh'
  },
  bmBurgerBars: {
    background: '#E9A41E'
  },
  bmBurgerBarsHover: {
    background: '#E9A41E'
  },
  bmCrossButton: {
    position: 'fixed',
    top: '10px',
    right: '20px'
  },
  bmCross: {
    background: '#bdc3c7',
    height: '25px',
    width: '3px'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: 0,
    height: '100%'
  },
  bmMenu: {
    background: '#1E272E',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    height: '100%',
    zIndex: '10000'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Example extends React.Component {
  render() {
    return (
      <Box px={3} py={3}>
        <Flex row justifyLeft width={7}>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
        </Flex>
        <Menu styles={styles} right width={'100%'} disableAutoFocus>
          <Flex alignLeft>
            <Link inverse to='/' mb={1}>
              <h2>Home</h2>
            </Link>
            <Link inverse to='/register-your-event' mb={1}>
              <h2>Register Your Event</h2>
            </Link>
            <Link inverse to='/learn-more' mb={1}>
              <h2>Learn More</h2>
            </Link>
            <Link inverse to='/get-involved' mb={1}>
              <h2>Get Involved</h2>
            </Link>

            <Link inverse to='/spread-the-word' mb={1}>
              <h2>Spread The Word</h2>
            </Link>
            <Link inverse to='/join-the-movement' mb={1}>
              <h2>Join The Movement</h2>
            </Link>
            <Link inverse to='/contact' mb={1}>
              <h2>Contact</h2>
            </Link>
          </Flex>
        </Menu>
      </Box>
    )
  }
}

export default Example
