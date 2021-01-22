import { React } from 'theme'
import { Link } from 'elements'
import { Flex } from 'layout'

export default () => (
  <Flex
    p={[3, 2, 2]}
    pr={3}
    row
    justifyContent={['flex-start', 'flex-end']}
    bg={'uiDark'}
    color={'uiLight'}>
    <small style={{ display: 'inline' }}>
      &copy; 2019 Climate Strike Oregon.&nbsp;
    </small>
    <small>
      Created by{' '}
      <Link a to='https://dustinheisey.com' color='accent'>
        Dustin Heisey
      </Link>
    </small>
  </Flex>
)
