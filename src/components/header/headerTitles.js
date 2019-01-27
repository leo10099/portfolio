import React from 'react'
import styled from 'styled-components'
import mq from '../shared/mixins/mediaQueries'
import landscape from '../shared/mixins/orientationLandscape'

export default function HeaderTitles(props) {
  const TitleAndSubtitleContainer = styled.div`
    ${landscape.tablet`padding-bottom: 2rem`}

    .title {
      letter-spacing: 4px;
      font-size: 12rem;
      ${mq.phone`font-size: 7rem;`}
      ${landscape.tablet`font-size: 5rem;`}
    }

    .subtitle {
      text-transform: uppercase;
      font-size: 2.2rem;
      ${mq.phone`font-size: 1.7rem;`}
      ${landscape.tablet`font-size: 1.4rem;`}
      letter-spacing: 2.3rem;
      ${mq.phone`letter-spacing: 1.3rem;`}
      ${landscape.tablet`letter-spacing: 1rem;`}
      position: relative;
      left: 1.7rem;
      ${mq.phone`left:0.8rem;`}
      ${landscape.tablet`left: 0.6rem;`}
      padding-top: 1.5rem;
    }
  `
  return (
    <TitleAndSubtitleContainer>
      <h1 className="title cursive">Leandro Hanc</h1>
      <h2 className="subtitle">
        <span className="color-primary">Web Developer</span>
      </h2>
    </TitleAndSubtitleContainer>
  )
}
