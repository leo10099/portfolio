import React from 'react'
import styled from 'styled-components'

export default function HeaderTitles(props) {
  const TitleAndSubtitleContainer = styled.div`
    .title {
      letter-spacing: 4px;
      font-size: 12rem;
    }

    .subtitle {
      text-transform: uppercase;
      font-size: 2.2rem;
      letter-spacing: 2.3rem;
      position: relative;
      left: 1.7rem;
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
