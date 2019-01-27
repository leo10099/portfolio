import React from 'react'
import styled from 'styled-components'

const About = styled.section`
  background-color: ${({ theme }) => theme.light1};
  height: 70vh;
  margin-top: -16rem;
`

export default function AboutPage() {
  return <About id="About">HOLA!!!!</About>
}
