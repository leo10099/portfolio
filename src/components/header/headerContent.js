import React from 'react'
import styled from 'styled-components'
import mq from '../../components/shared/mediaQueries'
import HeaderTittles from '../header/headerTitles'
import SocialLinks from '../header/socialLinks'
import FlashyButton from '../shared/flashyButton'
import FlexCenter from '../shared/mixins/flexCenter'
import AbsoluteCenter from '../shared/mixins/absoluteCenter'

const HeaderContainer = styled.div`
  ${FlexCenter()}
  height: 95vh;
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
        <FlashyButton fontSize={'1.2rem'}>Get in touch</FlashyButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
