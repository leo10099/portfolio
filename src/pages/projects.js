import React from 'react'
import styled from 'styled-components'

import flexCenter from '../components/shared/mixins/flexCenter'
import BackgroundTitle from '../components/shared/backgroundSectionTitle'
import ProjectsCardList from '../components/projects/projectsCardList'

const ProjectsContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.light};
  ${flexCenter()};
`

export default class Projects extends React.Component {
  render() {
    return (
      <section id="Projects">
        <ProjectsContainer>
          <ProjectsCardList />
          <BackgroundTitle color={'grey'} opacity={'0.07'}>
            work
          </BackgroundTitle>
        </ProjectsContainer>
      </section>
    )
  }
}
