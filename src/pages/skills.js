import React from 'react'
import styled from 'styled-components'
import flexCenter from '../components/shared/mixins/flexCenter'
import SkillGroups from '../components/skills/skillGroups'
import BackgroundTitle from '../components/shared/backgroundSectionTitle'
import mq from '../components/shared/mixins/mediaQueries'
import Landscape from '../components/shared/mixins/orientationLandscape'

const SkillsContainer = styled.div`
  min-height: 95vh;
  z-index: 11;
  position: relative;

  ${Landscape.phone`
  min-height: 120vh
  `}
`
const SkillsSvgContainer = styled.div`
  ${flexCenter()};
  width: 30vw;
  height: 75%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10rem;

  ${// @ts-ignore
  mq.tablet`
    width: 90%;
    height: 80%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10rem;
    `}
`

export default function Skills() {
  return (
    <section id="Skills">
      <SkillsContainer className="clipped-background-skills">
        <SkillsSvgContainer>
          <SkillGroups />
          <BackgroundTitle
            color={'#1E1E1E'}
            opacity={0.1}
            yPositionOffset={'50%'}
          >
            skills
          </BackgroundTitle>
        </SkillsSvgContainer>
      </SkillsContainer>
    </section>
  )
}
