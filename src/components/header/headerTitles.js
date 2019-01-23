import React from 'react'
import styled from 'styled-components'

export default function HeaderTitles() {
  const TitleAndSubtitleContainer = styled.div`
    .title {
      letter-spacing: 4px;
      font-size: 16rem;
      padding-bottom: 2rem;
    }

    .subtitle {
      text-transform: uppercase;
      font-size: 2.6rem;
      letter-spacing: 3rem;
      position: relative;
      left: 2rem;
      margin-bottom: 2rem;
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
