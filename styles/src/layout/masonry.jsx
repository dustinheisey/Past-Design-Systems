/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export const Masonry = ({ col, gap, children, ...props }) => (
  <Box
    sx={{
      columns: col,
      ...props
    }}
  >
    {children}
  </Box>
)
