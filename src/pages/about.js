import React from 'react'
import styled from 'styled-components'
import flexCenter from '../components/shared/mixins/flexCenter'

const About = styled.section`
  ${flexCenter()}
  background-color: ${({ theme }) => theme.light1};
  height: 70vh;
  margin-top: -16rem;
`

export default function AboutPage() {
  return <About id="About">HOLA!!!!</About>
}
