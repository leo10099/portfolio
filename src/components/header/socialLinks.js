import React from 'react'
import styled from 'styled-components'

// SVG Images

import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'

const Container = styled.div`
  .image-container {
    height: 100%;
    width: 200px;
    display: inline-flex;
    justify-content: space-around;
    transform: scale(1.1);
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
        <a href="https://github.com/leo10099">
          <img src={github} alt="Github" className="image-social" />
        </a>
        <a href="https://www.linkedin.com/in/leandrohanc/">
          <img src={linkedin} alt="Linkeding" className="image-social" />{' '}
        </a>
        <a href="https://twitter.com/HancLeandro">
          <img src={twitter} alt="Twitter" className="image-social" />
        </a>
      </div>
    </Container>
  )
}
