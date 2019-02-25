import React from 'react'
import styled from 'styled-components'
import ProjectsInfo from './projectsInfo'
import flexCenter from '../../components/shared/mixins/flexCenter'
import ProjectsCard from './projectCard'

export default function ProjectsCardList() {
  const { projects } = ProjectsInfo

  const ProjectsCardListContainer = styled.div`
    font-family: 'Lato';
    font-size: 2rem;
    ${flexCenter()};
    flex-direction: row;
    justify-content: space-evenly;
    padding: 4rem;
    flex-wrap: wrap;
    width: 100vw;
    height: 100%;
  `
  return (
    <ProjectsCardListContainer>
      {projects.map(project => {
        return <ProjectsCard project={project} />
      })}
    </ProjectsCardListContainer>
  )
}
