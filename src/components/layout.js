import React from 'react'

import '../css/app.css'
import Header from '../pages/header'
import SEO from '../components/seo'
import GlobalStyles from '../components/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../components/shared/theme'

const Layout = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        keywords={['Leandro, Hanc,Web,Developer, Desarrolador']}
        lang={['es', 'en']}
        description={'Leandro Hanc - Web Developer Portfolio'}
        title={'Leandro Hanc - Portfolio'}
      />
      <GlobalStyles />
      <Header />
    </>
  </ThemeProvider>
)

export default Layout
