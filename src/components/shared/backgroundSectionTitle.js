import React from 'react'
import styled from 'styled-components'
import AbsoluteCenter from '../../components/shared/mixins/absoluteCenter'
import mq from '../../components/shared/mixins/mediaQueries'

const BackgroundTextContainer = styled.div`
  width: 100vw;
`

const BackgroundText = styled.div`
  ${AbsoluteCenter()};

  z-index: -1;
  color: ${props => props.color};
  font-size: ${props => props.fontSize || '30vw'};
  width: 100vw;
  opacity: ${props => props.opacity};
  line-height: 0.8;
  width: 100%;
  font-family: 'Lato';
  font-weight: bolder;
  text-align: center;

  ${// @ts-ignore
  mq.phone`
    top:${props => props.offset};
    font-size:${props => props.fontSizeMobile || '35vw'} ;
    `}
`

export default function backgroundSectionTitle(props) {
  return (
    <BackgroundTextContainer>
      <BackgroundText
        color={props.color}
        opacity={props.opacity}
        offset={props.yPositionOffset}
        fontSize={props.fontSize}
        fontSizePhone={props.fontSizePhone}
      >
        {props.children}
      </BackgroundText>
    </BackgroundTextContainer>
  )
}
