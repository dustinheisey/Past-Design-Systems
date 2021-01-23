import { React, Box } from 'styles'

export const Text = ({ children, variant, ...props }) => (
  <Box as='p' variant={variant} {...props}>
    {children}
  </Box>
)
