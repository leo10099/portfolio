import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import mq from '../../components/shared/mixins/mediaQueries'

import html from '../../images/skills/html-01.svg'
import css from '../../images/skills/css-01.svg'
import js from '../../images/skills/js-01.svg'
import react from '../../images/skills/react-01.svg'
import vue from '../../images/skills/vue-01.svg'
import sass from '../../images/skills/sass-01.svg'
import node from '../../images/skills/node-01.svg'
import sql from '../../images/skills/mongo-01.svg'
import mongo from '../../images/skills/sql-01.svg'

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: ${({ theme }) => theme.light2};
  font-family: 'Lato';

  ${// @ts-ignore
  mq.phone`
  justify-content: center;
    `}

  span {
    font-size: 1vw;
    ${// @ts-ignore
    mq.phone`
    font-size: 1.2rem
    margin-bottom: 2rem;
    `}
  }

  img {
    height: 10vh;
    width: 10vw;
    margin-bottom: 4rem;
    ${// @ts-ignore
    mq.phone`
   margin-bottom: 2rem;
   width: 100px;
    `}
  }

  .skills {
    opacity: 0;
    transition: all ease-in 0.5s;
    transform: scale(0.1);
  }
  .skills-1 {
    transition-delay: 0.1s;

    &.appear {
      opacity: 1;
      transform: scale(1);
    }
  }

  .skills-2 {
    transition-delay: 0.3s;

    &.appear {
      opacity: 1;
      transform: scale(1);
    }
  }

  .skills-3 {
    transition-delay: 0.3s;

    &.appear {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export default function SkillGroups() {
  return (
    <React.Fragment>
      <Controller>
        <Scene
          duration={1000}
          classToggle={['.animated.skills', 'appear']}
          triggerElement={'.animated.skills'}
          reverse={false}
          offset={-200}
        >
          <>
            <SkillGroup>
              <img src={html} className="animated skills skills-1" />
              <span className="animated skills skills-1">HTML</span>
            </SkillGroup>
            <SkillGroup>
              <img src={css} className="animated skills skills-2" />
              <span className="animated skills skills-2">CSS</span>
            </SkillGroup>
            <SkillGroup>
              <img src={js} className="animated skills skills-3" />
              <span className="animated skills skills-3">JAVASCRIPT</span>
            </SkillGroup>

            <SkillGroup>
              <img src={react} className="animated skills skills-1" />
              <span className="animated skills skills-1">REACT</span>
            </SkillGroup>
            <SkillGroup>
              <img src={vue} className="animated skills skills-2" />
              <span className="animated skills skills-2">VUE</span>
            </SkillGroup>
            <SkillGroup>
              <img src={sass} className="animated skills skills-3" />
              <span className="animated skills skills-3">SASS</span>
            </SkillGroup>

            <SkillGroup>
              <img src={node} className="animated skills skills-1" />
              <span className="animated skills skills-1">NODE</span>
            </SkillGroup>
            <SkillGroup>
              <img src={mongo} className="animated skills skills-3" />
              <span className="animated skills skills-3">SQL</span>
            </SkillGroup>
            <SkillGroup>
              <img src={sql} className="animated skills skills-2" />
              <span className="animated skills skills-2">MONGO DB</span>
            </SkillGroup>
          </>
        </Scene>
      </Controller>
    </React.Fragment>
  )
}
