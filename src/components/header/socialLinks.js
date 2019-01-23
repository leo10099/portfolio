import React from 'react'
import styled from 'styled-components'

// SVG Images

import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'

const Container = styled.div`
  .image-container {
    height: 100%;
    width: 33%;
    display: inline-flex;
    justify-content: space-around;
  }

  .image-social:hover {
    transition: 0.3s all ease;
    transform: rotate(360deg);
    transform: rotate(1turn) scale3d(1.4, 1.4, 1.4);
    cursor: pointer;
  }
`

export default function SocialLinks() {
  return (
    <Container id="Social-Links">
      <div className="image-container">
        <img src={github} alt="Github" className="image-social" />
        <img src={linkedin} alt="Linkeding" className="image-social" />
        <img src={twitter} alt="Twitter" className="image-social" />
      </div>
    </Container>
  )
}
