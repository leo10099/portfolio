import React from 'react'
import styled from 'styled-components'

import HeaderTitles from '../header/headerTitles'
import SocialLinks from '../header/socialLinks'
import FlashyButton from '../shared/flashyButton'
import FlexCenter from '../shared/mixins/flexCenter'
import Landscape from '../shared/mixins/orientationLandscape'

import LocaleContext from '../shared/localeContext'
import { ES_CALL_TO_ACTION } from '../../locales/es.json'
import { EN_CALL_TO_ACTION } from '../../locales/en.json'

const HeaderContainer = styled.div`
  ${FlexCenter()}
  height: 95vh;
  ${Landscape.desktop`
  top: -2.5rem
  `}
  position: relative;
`

const HeaderContent = styled.div`
  color: ${({ theme }) => theme.light1};
  text-shadow: black 1px 4px 2px !important;
  font-family: 'Open Sans';
  text-align: center;
  ${FlexCenter()}
  justify-content:space-around;
  height: 70%;

  .color-primary {
    color: ${({ theme }) => theme.primary};
  }
`

export default () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitles />
        <SocialLinks />
        <LocaleContext.Consumer>
          {({ locale }) => (
            <>
              <FlashyButton fontSize={'1.3rem'}>
                {locale === 'es' ? ES_CALL_TO_ACTION : EN_CALL_TO_ACTION}
              </FlashyButton>
            </>
          )}
        </LocaleContext.Consumer>
      </HeaderContent>
    </HeaderContainer>
  )
}
