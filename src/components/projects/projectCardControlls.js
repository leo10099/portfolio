import React from 'react'
import LocaleContext from '../shared/localeContext'
import Button from '../shared/Button'

import {
  EN_PROJECTS_SEE_DETAILS,
  EN_PROJECTS_SEE_SITE,
} from '../../locales/en.json'
import {
  ES_PROJECTS_SEE_DETAILS,
  ES_PROJECTS_SEE_SITE,
} from '../../locales/es.json'

export default function projectCardControlls(props) {
  const clickHandler = props => {
    window.open(props.url)
  }
  return (
    <LocaleContext.Consumer>
      {({ locale }) => (
        <Button
          fontSize={'1.6rem'}
          position={'66%'}
          onClick={function() {
            clickHandler(props)
          }}
        >
          {locale === 'es' ? ES_PROJECTS_SEE_SITE : EN_PROJECTS_SEE_SITE}
        </Button>
      )}
    </LocaleContext.Consumer>
  )
}
