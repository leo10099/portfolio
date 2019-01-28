import React from 'react'
import styled from 'styled-components'
import LocaleContext from '../shared/localeContext'

const LangToggleContainer = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 3rem;
  color: ${({ theme }) => theme.dark};
  font-size: 1.5rem;
  font-family: 'Open Sans';

  a.idioma {
    font-weight: 300;
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

    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  a.idioma:hover:before,
  a.idioma:after {
    position: absolute;
    content: '';
  }
`

export default function LangToggle() {
  return (
    <LocaleContext.Consumer>
      {({ toggleLocale, locale }) => (
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
