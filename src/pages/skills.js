import React from 'react'
import styled from 'styled-components'
import flexCenter from '../components/shared/mixins/flexCenter'
import SkillGroups from '../components/skills/SkillGroups'
import mq from '../components/shared/mixins/mediaQueries'

const SkillsContainer = styled.div`
  min-height: 95vh;
  ${// @ts-ignore
  mq.phone`
    height:100%;
    margin: -16rem auto;
    `}
`
const SkillsSvgContainer = styled.div`
  ${flexCenter()};
  width: 30vw;
  height: 75%;
  flex-direction: row;
  flex-wrap: wrap;
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
