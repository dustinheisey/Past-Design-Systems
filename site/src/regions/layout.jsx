import {
  Layout as StyledLayout,
  Main,
  React,
  SEO,
  Global,
  ThemeProvider
} from 'styles'

import { Theme } from 'styles'

export const Layout = ({ title, description, index, children }) => (
  <Global>
    <SEO
      title={title}
      desc={description}
      img='https://examplesite/static/logo.svg'
      url='https://examplesite.com'
    />
    <ThemeProvider theme={Theme}>
      <StyledLayout>
        <Main>{children}</Main>
      </StyledLayout>
    </ThemeProvider>
  </Global>
)
