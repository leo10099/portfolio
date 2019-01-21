import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../components/styled/theme'
import GlobalStyles from "../components/styled/globalStyles"
import '../css/app.css'


const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default Layout
