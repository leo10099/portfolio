import React from 'react'
import styled from 'styled-components'
import ProjectsInfo from './projectsInfo'
import flexCenter from '../../components/shared/mixins/flexCenter'
import ProjectsCard from './projectCard'

export default function ProjectsCardList() {
  const { projects } = ProjectsInfo

  const ProjectsCardListContainer = styled.div`
    font-family: 'Lato';
    font-size: '2rem';
    ${flexCenter()};
    flex-direction: 'row';
  `
  return (
    <ProjectsCardListContainer>
      {projects.map(project => {
        return <ProjectsCard project={project} />
      })}
    </ProjectsCardListContainer>
  )
}
