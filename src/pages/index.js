import React from 'react'
import Hero from '../components/Hero'
import ff from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
// ...GatsbyImageSharpFluid
const IndexPage = () => {
  return <Layout>
    <Hero showPerson></Hero>
  </Layout>
}

export default IndexPage
