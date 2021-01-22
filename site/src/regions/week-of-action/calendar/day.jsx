/** @jsx jsx */
import { jsx } from 'theme'
import { Box } from 'layout'

import { Accordion } from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default ({ day, date, children }) => (
  <Box py={[4, 2, 2]} px={[0, 2, 2]}>
    <h4
      sx={{
        color: 'accent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['flex-start', 'center', 'center']
      }}>
      {day}
      <span sx={{ color: '#787878', fontSize: '75%', ml: 1 }}>{date}</span>
    </h4>
    <Accordion allowZeroExpanded sx={{ border: 'none' }}>
      {children}
    </Accordion>
  </Box>
)
