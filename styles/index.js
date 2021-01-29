import styled from '@emotion/styled'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, jsx } from 'theme-ui'

export { Global } from './src/theme/global/global.jsx'
export { SEO } from './src/theme/seo/seo.jsx'
export { Theme } from './src/theme/theme.js'

export {
  ThemeProvider,
  jsx,
  styled as Styled,
  React,
  Component,
  StaticQuery,
  graphql
}

export { Box } from './src/utils/layout/box.jsx'
export { Columns } from './src/utils/layout/columns.jsx'
export { Inline } from './src/utils/layout/inline.jsx'
export { Masonry } from './src/utils/layout/masonry.jsx'
export {
  Address,
  Article,
  Aside,
  Footer,
  Header,
  Main,
  Section,
  Nav
} from './src/utils/layout/sections.jsx'
export { Sidebar } from './src/utils/layout/sidebar.jsx'
export { Stack } from './src/utils/layout/stack.jsx'
export { Tiles } from './src/utils/layout/tiles.jsx'

export { H1, H2, H3, H4 } from './src/elements/text/heading.jsx'
export { Text } from './src/elements/text/text.jsx'
export { Caption } from './src/elements/text/caption.jsx'
export { Link } from './src/elements/link.jsx'
export { Button } from './src/elements/button.jsx'
export { Divider } from './src/elements/divider.jsx'
export { SVG } from './src/elements/svg.jsx'
export { Image } from './src/elements/image.jsx'
