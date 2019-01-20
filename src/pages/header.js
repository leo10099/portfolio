import React from 'react'
import styled from 'styled-components'
import ClippedBackground from '../components/styled/clippedBackground'
import AbsoluteCenter from "../components/styled/mixins/absoluteCenter"

const HeaderContent = styled.div`
  color: ${({ theme }) => theme.light1};
  font-size: 8rem;
  text-shadow:black 1px 4px 2px !important;
  font-family:"Open Sans";
  text-align:center;
  ${AbsoluteCenter()}
  transform: translate(-50%, -75%);

  .title {
    letter-spacing: 4px;
    font-size: 14rem; 
    padding-bottom:2rem;
  }
  
  .subtitle {
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 2.5rem;
    position:relative;
    left:2rem;
  }

  .color-primary {
    color:${({ theme }) => theme.darkBlue}
  }

`
export default function Header() {
  return (
    <ClippedBackground className={'clipped-background'}>
      <HeaderContent>
        <h1 className="title cursive">Leandro Hanc</h1>
        <h2 className="subtitle"><span className="color-primary">Web Developer</span></h2>
      </HeaderContent>
    </ClippedBackground>
  )
}
