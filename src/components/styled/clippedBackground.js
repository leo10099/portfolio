import React from 'react'
import styled from 'styled-components'

import image from '../../images/code2.jpg'

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-blend-mode: multiply;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: url(${image});
  background-color:${({ theme }) => theme.dark};
  background-blend-mode: multiply;
`

export default function ClippedBackground(props) {
  return <BackgroundContainer>{props.children}</BackgroundContainer>
}
