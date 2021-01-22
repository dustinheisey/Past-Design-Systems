/** @jsx jsx */
import { jsx, Box } from 'theme'

export default ({ col, gap, children, ...props }) => (
  <Box
    sx={{
      columns: col,
      ...props
    }}
  >
    {children}
  </Box>
)
