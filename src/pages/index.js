import React from 'react'

import Layout from '../components/layout'
import Header from '../pages/header'
import SEO from '../components/seo'
import TwoSidedCard from "../components/styled/twoSidedCard"

const IndexPage = () => (
  <Layout>
    <>
      <SEO keywords={[`Leandro`, `Hanc`, `Desarrollo`, `Web`]} />
      <Header />
    </>
  </Layout>
)

export default IndexPage
