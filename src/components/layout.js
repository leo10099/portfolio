import React, { Component } from 'react'

import '../css/app.css'

import SEO from '../components/seo'
import GlobalStyles from '../components/globalStyles'
import Header from '../pages/header'
import About from '../pages/about'
import { ThemeProvider } from 'styled-components'
import theme from '../components/shared/theme'
import SetLang from '../components/fixed-position/setLang'

import LocaleProvider from '../components/shared/localeContextProvider'

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO
            keywords={['Leandro, Hanc,Web,Developer, Desarrolador']}
            description={'Leandro Hanc - Web Developer Portfolio'}
            title={'Leandro Hanc - Portfolio'}
          />
          <GlobalStyles />
          <LocaleProvider>
            <>
              <Header />
              <About />
              <SetLang />
            </>
          </LocaleProvider>
        </>
      </ThemeProvider>
    )
  }
}
