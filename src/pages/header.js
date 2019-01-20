import React from 'react'
import styled from 'styled-components'
import ClippedBackground from '../components/styled/clippedBackground'

const HeaderContent = styled.div`
  color: ${({ theme }) => theme.light1};
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 8rem;
  text-shadow:black 1px 4px 2px !important;
  font-family:"Open Sans";
  text-align:center;

  .title{
    letter-spacing: 4px;
    font-size: 14rem; 
    padding-bottom:2rem;
  }
  
  .subtitle{
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 2.5rem;
    position:relative;
    left:2rem;
  }

  .color-primary{
    color:${({ theme }) => theme.darkBlue}
  }
`



export default function Header() {
  return (
    <ClippedBackground className={'hello'} >
      <HeaderContent>
        <div style={{ textAlign: "center" }}>
          <h1 className="title cursive">Leandro Hanc</h1>
          <h2 className="subtitle"><span className="color-primary">Web Developer</span></h2>
        </div>
      </HeaderContent>
    </ClippedBackground>
  )
}
