import React from 'react'
import styled from 'styled-components'

// SVG Images

// @ts-ignore
import github from '../../images/github.svg'
// @ts-ignore
import linkedin from '../../images/linkedin.svg'
// @ts-ignore
import twitter from '../../images/twitter.svg'
import landscape from '../shared/mixins/orientationLandscape'

const Container = styled.div`
  ${landscape.tablet`padding-bottom: 2rem`}
  width: 50%;

  .image-container {
    height: 100%;
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;
    transform: scale(1.1);
  }

  .image-social:hover {
    transition: 0.3s all ease;
    transform: rotate(360deg);
    transform: rotate(1turn) scale3d(1.4, 1.4, 1.4);
    cursor: pointer;
    backface-visibility: 'hidden';
  }
`

export default function SocialLinks() {
  return (
    <Container>
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
