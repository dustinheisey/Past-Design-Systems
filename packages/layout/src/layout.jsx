/** @jsx jsx */
import { jsx, Box } from 'theme'

const Layout = ({ children, ...props }) => (
  <layout
    sx={{
      ...props
    }}
  >
    {children}
  </layout>
)

const Main = ({ children, ...props }) => (
  <main
    sx={{
      ...props
    }}
  >
    {children}
  </main>
)

const Footer = ({ children, ...props }) => (
  <footer
    sx={{
      ...props
    }}
  >
    {children}
  </footer>
)

const Header = ({ children, ...props }) => (
  <header
    sx={{
      ...props
    }}
  >
    {children}
  </header>
)

const Address = ({ children, ...props }) => (
  <Box
    as='address'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

const Article = ({ children, ...props }) => (
  <Box
    as='article'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

const Aside = ({ children, ...props }) => (
  <Box
    as='aside'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

const HGroup = ({ children, ...props }) => (
  <Box
    as='hgroup'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

const Section = ({ children, ...props }) => (
  <Box
    as='section'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

const Nav = ({ children, ...props }) => (
  <Box
    as='nav'
    sx={{
      ...props
    }}
  >
    {children}
  </Box>
)

export {
  Layout,
  Address,
  Article,
  Aside,
  Footer,
  Header,
  HGroup,
  Main,
  Section,
  Nav
}
