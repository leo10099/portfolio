import React from 'react'
import styled from 'styled-components'
import LocaleContext from '../shared/localeContext'
import mq from '../../components/shared/mixins/mediaQueries'

const LangToggleContainer = styled.div`
  position: fixed;
  right: 3vw;
  bottom: 1.5rem;
  color: ${({ theme }) => theme.shadow};
  font-size: 1.6rem;
  ${mq.tablet`font-size:1.3rem`}

  font-family: 'Open Sans';

  a.idioma {
    font-weight: 400;
    cursor: pointer;
  }

  a.idioma:hover {
    color: red;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.danger},
      ${({ theme }) => theme.secondary}
    );
    transition: 300ms all ease;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 400;
  }
`

export default function LangToggle() {
  return (
    <LocaleContext.Consumer>
      {({ toggleLocale }) => (
        <LangToggleContainer>
          <a className="idioma" onClick={toggleLocale}>
            es
          </a>
          <strong>|</strong>
          <a className="idioma" onClick={toggleLocale}>
            en
          </a>
        </LangToggleContainer>
      )}
    </LocaleContext.Consumer>
  )
}
