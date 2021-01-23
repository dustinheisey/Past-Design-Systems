import { React, Box } from 'styles'

export const Caption = ({ children, variant, ...props }) => (
  <Box as='p' variant={variant} {...props}>
    {children}
  </Box>
)
