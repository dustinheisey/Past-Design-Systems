import { jsx, ThemeProvider } from 'theme-ui'
import { Flex, Box, Layout, Header, Main, Container, Footer } from 'theme-ui'
import styled from '@emotion/styled'
import { createGlobalStyle, css } from 'styled-components'
import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'

export { default as Theme } from './src/theme'
// export { default as Global } from './src/global'
export { default as Media } from './src/media'
export { default as SEO } from './src/seo/seo'

export {
  createGlobalStyle,
  Global,
  css as CSS,
  styled as Styled,
  jsx,
  ThemeProvider,
  React,
  Component,
  Flex,
  Box,
  Layout,
  Header,
  Main,
  Container,
  Footer,
  Link,
  StaticQuery,
  graphql
}
