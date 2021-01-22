/** @jsx jsx */
import { jsx } from 'theme'
import { Box } from 'theme'
import { Header } from 'layout'
import Mobile from './mobile'
import Desktop from './nav'

export default () => (
  <Header width={10}>
    <Box sx={{ display: ['block', 'block', 'none'] }}>
      <Mobile />
    </Box>
    <Box sx={{ display: ['none', 'none', 'block'] }} width={10}>
      <Desktop />
    </Box>
  </Header>
)
