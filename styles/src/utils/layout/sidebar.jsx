/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Sidebar = ({ variant, children, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      variant: `sidebar.${variant}`
    }}
    {...props}
  >
    {children}
  </Box>
)
