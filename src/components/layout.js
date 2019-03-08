import React, { Component } from 'react'

import '../css/app.css'

import SEO from '../components/seo'

// THEMING
import GlobalStyles from '../components/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../components/shared/theme'

// LOCALES

import LocaleProvider from '../components/shared/localeContextProvider'

// NAV MENU
import NavMenu from '../components/shared/navMenu'

// PAGES
import Header from '../pages/header'
import About from '../pages/about'
import Skills from '../pages/skills'
import Projects from '../pages/projects'

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
              <NavMenu />
              <Header />
              <About />
              <Skills />
              <Projects />
            </>
          </LocaleProvider>
        </>
      </ThemeProvider>
    )
  }
}
