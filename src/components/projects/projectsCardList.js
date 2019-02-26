import React from 'react'
import styled from 'styled-components'
import ProjectsInfo from './projectsInfo'
import flexCenter from '../../components/shared/mixins/flexCenter'
import ProjectsCard from './projectCard'
import mq from '../shared/mixins/mediaQueries'

export default function ProjectsCardList() {
  const { projects } = ProjectsInfo

  const ProjectsCardListContainer = styled.div`
    font-family: 'Lato';
    font-size: 2rem;
    ${flexCenter()};
    flex-direction: row;
    justify-content: space-evenly;
    padding: 4rem;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    ${mq.phone`
    flex-direction: column;
    display: block;
    justify-content: center;
    margin: auto;
    padding:0;
    `}
  `
  return (
    <ProjectsCardListContainer>
      {projects.map(project => {
        return <ProjectsCard project={project} key={project.shortName} />
      })}
    </ProjectsCardListContainer>
  )
}
