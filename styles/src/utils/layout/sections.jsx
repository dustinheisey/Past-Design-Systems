import { Box } from 'styles'

export const Main = ({ children, ...props }) => (
  <Box as='main' {...props}>
    {children}
  </Box>
)

export const Footer = ({ children, ...props }) => (
  <Box as='footer' {...props}>
    {children}
  </Box>
)

export const Header = ({ children, ...props }) => (
  <Box as='header' {...props}>
    {children}
  </Box>
)

export const Address = ({ children, ...props }) => (
  <Box as='address' {...props}>
    {children}
  </Box>
)

export const Article = ({ children, ...props }) => (
  <Box as='article' {...props}>
    {children}
  </Box>
)

export const Aside = ({ children, ...props }) => (
  <Box as='aside' {...props}>
    {children}
  </Box>
)

export const Section = ({ children, ...props }) => (
  <Box as='section' {...props}>
    {children}
  </Box>
)

export const Nav = ({ children, ...props }) => (
  <Box as='nav' {...props}>
    {children}
  </Box>
)
