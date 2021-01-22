/** @jsx jsx */
import { jsx, Box } from 'theme'

export default ({ children, ...props }) => (
  <Box
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)
