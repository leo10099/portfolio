import React from 'react'
import styled from 'styled-components'
import flexCenter from '../components/shared/mixins/flexCenter'

const ProjectsContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  ${// @ts-ignore
  mq.phone`
    width: 90%;
    top: 15%;
    `}
  flex-wrap: wrap;
`

export default class Projects extends React.Component {
  render() {
    return <section id="Projects">PROYECTOS</section>
  }
}
