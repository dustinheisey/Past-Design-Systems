/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Masonry = ({ col, gap = 'md', children, ...props }) => (
  <Box
    sx={{
      columns: col,
      columnGap: gap
    }}
    {...props}
  >
    {children}
  </Box>
)
