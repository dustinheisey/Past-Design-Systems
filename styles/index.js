import styled from '@emotion/styled'
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export { Global } from './src/theme/global/global.jsx'
export { SEO } from './src/theme/seo/seo.jsx'

export { styled as Styled, React, Component, StaticQuery, graphql }

export { Box } from './src/utils/box.jsx'
export { Flex } from './src/utils/flex.jsx'
export { Masonry } from './src/utils/masonry.jsx'
export { Row, Col, Grid } from './src/utils/grid.jsx'
export { Card } from './src/components/card.jsx'
export {
  Address,
  Article,
  Aside,
  Footer,
  Header,
  Main,
  Section,
  Nav
} from './src/utils/layout.jsx'

export {
  H1,
  H2,
  H3,
  H4,
  Body,
  Caption
} from './src/elements/text.jsx'
export { Link } from './src/elements/link.jsx'
export { Button } from './src/elements/button.jsx'
export { Divider } from './src/elements/divider.jsx'
export { SVG } from './src/elements/svg.jsx'
export { Image } from './src/elements/image.jsx'
