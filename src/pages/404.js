import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NO ENCONTRADO</h1>
    <p>Uy, lo que buscabas no está aquí.</p>
  </Layout>
)

export default NotFoundPage
