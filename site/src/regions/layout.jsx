/** @jsx jsx */
/* eslint-disable no-unused-vars */
import { Layout, Main } from 'layout'
import { React, SEO, ThemeProvider, jsx, Global } from 'theme'

import Theme from '../config/theme'
import Header from './layout/header/header'
import Footer from './layout/footer/footer'
import Action from './week-of-action/action'

export default ({ title, description, index, children }) => (
  <>
    <Global
      styles={theme => ({
        img: {
          margin: 0
        },
        body: {
          backgroundColor: '#f7f7f7'
        }
      })}
    />
    <SEO
      title={title}
      desc={description}
      img='https://climatestrikeoregon.org/static/logoMobile.61e48620.svg'
      url='https://climatestrikeoregon.org'
    />
    <ThemeProvider theme={Theme}>
      <Layout>
        <Header />
        <Main>
          {children}
          {!index && <Action />}
        </Main>

        <Footer />
      </Layout>
    </ThemeProvider>
  </>
)
