import React from 'react'

import '../css/app.css'
import SEO from '../components/seo'
import GlobalStyles from '../components/globalStyles'
import Header from '../pages/header'
import About from '../pages/about'
import { ThemeProvider } from 'styled-components'
import theme from '../components/shared/theme'

const Layout = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        keywords={['Leandro, Hanc,Web,Developer, Desarrolador']}
        description={'Leandro Hanc - Web Developer Portfolio'}
        title={'Leandro Hanc - Portfolio'}
      />
      <GlobalStyles />
      <Header />
      <About />
    </>
  </ThemeProvider>
)

export default Layout
