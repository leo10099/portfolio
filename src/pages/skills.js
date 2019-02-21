import React from 'react'
import styled from 'styled-components'
import flexCenter from '../components/shared/mixins/flexCenter'
import SkillGroups from '../components/skills/skillGroups'
import mq from '../components/shared/mixins/mediaQueries'

const SkillsContainer = styled.div`
  min-height: 95vh;
`
const SkillsSvgContainer = styled.div`
  ${flexCenter()};
  width: 30vw;
  height: 75%;
  flex-direction: row;
  flex-wrap: wrap;

  ${// @ts-ignore
  mq.phone`
    width: 100%;
    height: 80%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10rem;
    `}
`

export default function Skills() {
  return (
    <section id="skills">
      <SkillsContainer className="clipped-background-skills">
        <SkillsSvgContainer>
          <SkillGroups />
        </SkillsSvgContainer>
      </SkillsContainer>
    </section>
  )
}
