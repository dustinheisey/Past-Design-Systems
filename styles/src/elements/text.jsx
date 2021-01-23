import { Box } from 'styles'

export const H1 = ({ children, variant, ...props }) => (
  <Box as='h1' variant={variant || 'h1'} {...props}>
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

export const Body = ({ children, variant, ...props }) => (
  <Box as='p' variant={variant} {...props}>
    {children}
  </Box>
)

export const Caption = ({ children, variant, ...props }) => (
  <Box as='p' variant={variant} {...props}>
    {children}
  </Box>
)
