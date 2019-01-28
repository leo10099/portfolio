import React, { Component } from 'react'
import LocaleContext from './localeContext'

class LocaleProvider extends Component {
  toggleLocale = () => {
    this.setState({
      locale: this.state.locale === 'en' ? 'es' : 'en',
    })
  }

  state = {
    locale: 'en',
    toggleLocale: this.toggleLocale,
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
