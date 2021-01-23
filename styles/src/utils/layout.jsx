/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Main = ({ children, ...props }) => (
  <Box as='main' {...props}>
    {children}
  </Box>
)

const Footer = ({ children, ...props }) => (
  <Box as='footer' {...props}>
    {children}
  </Box>
)

const Header = ({ children, ...props }) => (
  <Box as='header' {...props}>
    {children}
  </Box>
)

const Address = ({ children, ...props }) => (
  <Box as='address' {...props}>
    {children}
  </Box>
)

const Article = ({ children, ...props }) => (
  <Box as='article' {...props}>
    {children}
  </Box>
)

const Aside = ({ children, ...props }) => (
  <Box as='aside' {...props}>
    {children}
  </Box>
)

const Section = ({ children, ...props }) => (
  <Box as='section' {...props}>
    {children}
  </Box>
)

const Nav = ({ children, ...props }) => (
  <Box as='nav' {...props}>
    {children}
  </Box>
)

export { Address, Article, Aside, Footer, Header, Main, Section, Nav }
