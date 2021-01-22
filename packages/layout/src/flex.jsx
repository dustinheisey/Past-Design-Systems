/** @jsx jsx */
import { jsx, Box } from 'theme'

export default ({
  row,
  alignLeft,
  alignRight,
  alignAround,
  alignBetween,
  alignEvenly,
  justifyLeft,
  justifyRight,
  justifyAround,
  justifyBetween,
  justifyEvenly,
  children,
  ...props
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: (row && 'row') || 'column',
      flexWrap: 'wrap',
      alignItems:
        (alignLeft && 'flex-start') ||
        (alignRight && 'flex-end') ||
        (alignBetween && 'space-between') ||
        (alignAround && 'space-around') ||
        (alignEvenly && 'space-evenly') ||
        'center',
      justifyContent:
        (justifyLeft && 'flex-start') ||
        (justifyRight && 'flex-end') ||
        (justifyBetween && 'space-between') ||
        (justifyAround && 'space-around') ||
        (justifyEvenly && 'space-evenly') ||
        'center',
      ...props
    }}
  >
    {children}
  </Box>
)
