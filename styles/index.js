import styled from '@emotion/styled'
import { createGlobalStyle, css } from 'styled-components'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export { Global } from './src/theme/global/global.jsx'
export { SEO } from './src/theme/seo/seo.jsx'

export {
  createGlobalStyle,
  css as CSS,
  styled as Styled,
  React,
  Component,
  StaticQuery,
  graphql
}

export { Box } from './src/layout/box.jsx'
export { Flex } from './src/layout/flex.jsx'
export { Masonry } from './src/layout/masonry.jsx'
export { Areas, Area } from './src/layout/areas.jsx'
export { Row, Col, Grid } from './src/layout/grid.jsx'
export { Card } from './src/layout/card.jsx'
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
} from './src/layout/layout.jsx'


export { H1, H2, H3, H4, H5, H6, P } from './src/elements/text.jsx'
export { Link } from './src/elements/link.jsx'
export { Button } from './src/elements/button.jsx'
export { Divider } from './src/elements/divider.jsx'
export { SVG } from './src/elements/svg.jsx'
export { Image } from './src/elements/image.jsx'

