import {
  Main,
  React,
  SEO,
  Global,
  ThemeProvider,
  Theme
} from 'styles'
import Header from './header'
import Footer from './footer'

export const Layout = ({ title, description, index, children }) => (
  <Global>
    <SEO
      title={title}
      desc={description}
      img='https://examplesite/static/logo.svg'
      url='https://examplesite.com'
    />
    <ThemeProvider theme={Theme}>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </ThemeProvider>
  </Global>
)
