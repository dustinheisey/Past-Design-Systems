import styled from '@emotion/styled'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, jsx } from 'theme-ui'

export { Global } from './src/theme/global/global'
export { SEO } from './src/theme/seo/seo'
export { Theme } from './src/theme/theme'

export {
  ThemeProvider,
  jsx,
  styled as Styled,
  React,
  Component,
  StaticQuery,
  graphql
}

export { Box } from './src/utils/layout/box'
export { Columns } from './src/utils/layout/columns'
export { Inline } from './src/utils/layout/inline'
export { Masonry } from './src/utils/layout/masonry'
export {
  Address,
  Article,
  Aside,
  Footer,
  Header,
  Main,
  Section,
  Nav
} from './src/utils/layout/sections'
export { Sidebar } from './src/utils/layout/sidebar'
export { Stack } from './src/utils/layout/stack'
export { Tiles } from './src/utils/layout/tiles'

export { H1, H2, H3, H4 } from './src/elements/text/heading'
export { Text } from './src/elements/text/text'
export { Caption } from './src/elements/text/caption'
export { Link } from './src/elements/link'
export { Button } from './src/elements/button'
export { Divider } from './src/elements/divider'
export { SVG } from './src/elements/svg'
export { Image } from './src/elements/image'
