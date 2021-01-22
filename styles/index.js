import styled from '@emotion/styled'
import { createGlobalStyle, css } from 'styled-components'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export { Global } from './src/theme/global'
export { SEO } from './src/theme/seo/seo'

export {
  createGlobalStyle,
  css as CSS,
  styled as Styled,
  React,
  Component,
  StaticQuery,
  graphql
}

export { Box } from './src/layout/box'
export { Flex } from './src/layout/flex'
export { Masonry } from './src/layout/masonry'
export { Areas, Area } from './src/layout/areas'
export { Row, Col, Grid } from './src/layout/grid'
export { Card } from './src/layout/card'
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
} from './src/layout/layout'


export { H1, H2, H3, H4, H5, H6, P } from './src/elements/text'
export { Link } from './src/elements/link'
export { Button } from './src/elements/button'
export { Divider } from './src/elements/divider'
export { SVG } from './src/elements/svg'
export { Image } from './src/elements/image'

