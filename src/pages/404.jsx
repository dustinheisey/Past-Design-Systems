import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the
      sadness.
      <br />
      <Link to='/'>Take me home.</Link>
    </p>
  </Layout>
)