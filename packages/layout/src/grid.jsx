/** @jsx jsx */
import { jsx, Box } from 'theme'

export const Grid = ({ col, children, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(' + col + ', 1fr)',
      ...props
    }}>
    {children}
  </Box>
)

export const Row = ({ children, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', 'auto', 'repeat(12, 1fr)'],
      alignContent: 'center',
      alignItems: 'center',
      ...props
    }}>
    {children}
  </Box>
)

export const Col = ({ span, children, ...props }) => (
  <Box
    sx={{
      gridColumn: ['span 12', 'span 12', 'span ' + span],
      ...props
    }}>
    {children}
  </Box>
)
