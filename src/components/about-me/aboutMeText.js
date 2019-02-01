import React from 'react'
import styled from 'styled-components'
import mq from '../../components/shared/mixins/mediaQueries'

const TextContainer = styled.div`
  h2 {
    font-size: 4rem;
    ${// @ts-ignore
    mq.phone`font-size :2.5rem`}

    padding-bottom: 1rem;
    letter-spacing: 2.4px;
    font-family: 'Open Sans';
    font-weight: 600;
    color: ${({ theme }) => theme.black};
  }
  h3 {
    font-size: 2.3rem;
    ${// @ts-ignore
    mq.phone`font-size :1.6rem`}
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
  font-size: 1.3rem;
  ${// @ts-ignore
  mq.phone`font-size: 1rem`}
  line-height: 2.5rem;
  color: ${({ theme }) => theme.dark3};
`

export default function aboutMeText() {
  return (
    <TextContainer>
      <h2>Hey there! I'm Leandro</h2>
      <h3>A passionate self-taught web developer</h3>
      <PersonalAttributes>
        <p>I'm very determinded and love to solve technical problems.</p>
        <p>
          I'm learning continuously, always looking improve myself, trying to be
          like a sponge that absorbs as much knowledge as I can.
        </p>
      </PersonalAttributes>
    </TextContainer>
  )
}
