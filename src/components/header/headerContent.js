import React from 'react'
import styled from 'styled-components'

import HeaderTittles from '../header/headerTitles'
import SocialLinks from '../header/socialLinks'
import FlashyButton from '../shared/flashyButton'
import AbsoluteCenter from '../shared/mixins/absoluteCenter'

const HeaderContent = styled.div`
  color: ${({ theme }) => theme.light1};
  font-size: 8rem;
  text-shadow: black 1px 4px 2px !important;
  font-family: 'Open Sans';
  text-align: center;
  ${AbsoluteCenter()}
  transform: translate(-50%, -70%);

  .color-primary {
    color: ${({ theme }) => theme.primaryDark};
  }
`
export default () => {
  return (
    <HeaderContent>
      <HeaderTittles />
      <SocialLinks />
      <FlashyButton fontSize={'1.2rem'}>Get in touch</FlashyButton>
    </HeaderContent>
  )
}
