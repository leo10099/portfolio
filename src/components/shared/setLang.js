import React from 'react'
import styled from 'styled-components'
import LocaleContext from '../shared/localeContext'
import mq from '../../components/shared/mixins/mediaQueries'

const LangToggleContainer = styled.div`
  position: absolute;
  z-index: 100;
  font-size: 1.6rem;
  ${mq.tablet`font-size:1.3rem`}
  font-family: 'Open Sans';
  bottom: 3%;
  right: 3%;

  a.idioma {
    font-weight: 400;
    cursor: pointer;
    color: ${({ theme }) => theme.shadow};
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
      {({
        // @ts-ignore
        setLocale,
      }) => (
        <LangToggleContainer>
          <a className="idioma" onClick={() => setLocale('es')}>
            es
          </a>
          <strong>|</strong>
          <a className="idioma" onClick={() => setLocale('en')}>
            en
          </a>
        </LangToggleContainer>
      )}
    </LocaleContext.Consumer>
  )
}
