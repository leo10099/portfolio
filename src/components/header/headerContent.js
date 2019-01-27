import React from 'react'
import styled from 'styled-components'

import HeaderTittles from '../header/headerTitles'
import SocialLinks from '../header/socialLinks'
import FlashyButton from '../shared/flashyButton'
import FlexCenter from '../shared/mixins/flexCenter'
import landscape from '../shared/mixins/orientationLandscape'

const HeaderContainer = styled.div`
  ${FlexCenter()}
  height: 95vh;
  ${landscape.desktop`
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
        <HeaderTittles />
        <SocialLinks />
        <FlashyButton fontSize={'1.3rem'}>Get in touch</FlashyButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
