import React from 'react'
import styled from 'styled-components'
import mq from '../../components/shared/mixins/mediaQueries'

import LocaleContext from '../shared/localeContext'

import {
  EN_GREETING,
  EN_ABOUT_ME_DESCRIPTION,
  EN_ABOUT_ME_P1,
  EN_ABOUT_ME_P2,
} from '../../locales/en.json'
import {
  ES_GREETING,
  ES_ABOUT_ME_DESCRIPTION,
  ES_ABOUT_ME_P1,
  ES_ABOUT_ME_P2,
} from '../../locales/es.json'

const TextContainer = styled.div`
  font-family: 'Open Sans';
  font-weight: 600;

  ${// @ts-ignore
  mq.phone`text-align:center
    `}
  h2 {
    font-size: 4rem;
    ${// @ts-ignore
    mq.phone`font-size: 2rem;
    font-weight: bolder;
    `}
    margin: 1rem auto;
    letter-spacing: 2.4px;
    color: ${({ theme }) => theme.black};
  }
  h3 {
    font-size: 2.3rem;
    ${// @ts-ignore
    mq.phone`font-size :1.7rem`}
    padding-bottom: 4rem;
    letter-spacing: 1.5px;
    font-family: 'Lato';
    color: ${({ theme }) => theme.dark};
  }
`

const PersonalAttributes = styled.div`
  max-width: 85%;
  font-family: 'Open Sans';
  letter-spacing: 1.4px;
  font-size: 1.5rem;
  font-weight: lighter;
  ${// @ts-ignore
  mq.phone`font-size: 1.2rem;
  max-width:100%;`}
  line-height: 2.5rem;
  color: ${({ theme }) => theme.dark3};
`

export default function aboutMeText() {
  return (
    <TextContainer>
      <LocaleContext.Consumer>
        {({ locale }) => (
          <>
            <h2> {locale === 'es' ? ES_GREETING : EN_GREETING}</h2>
            <h3>
              {locale === 'es'
                ? ES_ABOUT_ME_DESCRIPTION
                : EN_ABOUT_ME_DESCRIPTION}
            </h3>
            <PersonalAttributes>
              <p>{locale === 'es' ? ES_ABOUT_ME_P1 : EN_ABOUT_ME_P1}</p>
              <p>{locale === 'es' ? ES_ABOUT_ME_P2 : EN_ABOUT_ME_P2}</p>
            </PersonalAttributes>
          </>
        )}
      </LocaleContext.Consumer>
    </TextContainer>
  )
}
