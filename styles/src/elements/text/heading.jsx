import { React, Box } from 'styles'

export const H1 = ({ children, variant, ...props }) => (
  <Box as='h1' variant={variant || 'heading.page'} {...props}>
    {children}
  </Box>
)

export const H2 = ({ children, variant, ...props }) => (
  <Box as='h2' variant={variant || 'h2'} {...props}>
    {children}
  </Box>
)

export const H3 = ({ children, variant, ...props }) => (
  <Box as='h3' variant={variant || 'h3'} {...props}>
    {children}
  </Box>
)

export const H4 = ({ children, variant, ...props }) => (
  <Box as='h4' variant={variant || 'h4'} {...props}>
    {children}
  </Box>
)
