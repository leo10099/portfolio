import React, { Component } from 'react'
import LocaleContext from './localeContext'

class LocaleProvider extends Component {
  setLocale = lang => {
    this.setState({
      locale: lang,
    })
  }

  state = {
    locale: 'en',
    setLocale: this.setLocale,
  }
  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        {this.props.children}
      </LocaleContext.Provider>
    )
  }
}

export default LocaleProvider
