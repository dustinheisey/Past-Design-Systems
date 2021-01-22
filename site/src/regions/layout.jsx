import { Layout as StyledLayout, Main, React, SEO, Global } from 'styles'

export const Layout = ({ title, description, index, children }) => (
    <Global>
    <SEO
      title={title}
      desc={description}
      img='https://examplesite/static/logo.svg'
      url='https://examplesite.com'
    />
      <StyledLayout>
        <Main>
          {children}
        </Main>
      </StyledLayout>
      </Global>
)
