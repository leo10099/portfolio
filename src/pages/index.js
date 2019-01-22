import React from 'react'

import Layout from '../components/layout'
import Header from '../pages/header'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <>
      <SEO
        keywords={['Leandro, Hanc,Web,Developer, Desarrolador']}
        lang={['es', 'en']}
        description={'Leandro Hanc - Web Developer Portfolio'}
        title={'Leandro Hanc - Portfolio'}
      />
      <Header />
    </>
  </Layout>
)

export default IndexPage
