import React from 'react'
import styled from 'styled-components'
import AbsoluteCenter from '../../components/shared/mixins/absoluteCenter'
import mq from '../../components/shared/mixins/mediaQueries'

const BackgroundTextContainer = styled.div`
  width: 100vw;
`

const BackgroundText = styled.div`
  ${AbsoluteCenter()};
  ${// @ts-ignore
  mq.phone`
    top:20%;
    `}
  z-index: -1;
  color: grey;
  font-size: 30vw;
  width: 100vw;
  opacity: 0.07;
  line-height: 0.8;
  width: 100%;
  font-family: 'Lato';
  font-weight: bolder;
  text-align: center;
`

export default function backgroundSectionTitle(props) {
  return (
    <BackgroundTextContainer>
      <BackgroundText>{props.children}</BackgroundText>
    </BackgroundTextContainer>
  )
}
