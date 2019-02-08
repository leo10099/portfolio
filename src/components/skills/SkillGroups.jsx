import React from 'react'
import styled from 'styled-components'

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

  span {
    font-size: 1vw;
  }
  img {
    height: 10vh;
    width: 10vw;
    margin-bottom: 4rem;
  }
`

export default function SkillGroups() {
  return (
    <React.Fragment>
      <SkillGroup>
        <img src={html} />
        <span>HTML</span>
      </SkillGroup>
      <SkillGroup>
        <img src={css} />
        <span>CSS</span>
      </SkillGroup>
      <SkillGroup>
        <img src={js} />
        <span>JAVASCRIPT</span>
      </SkillGroup>
      <SkillGroup>
        <img src={react} />
        <span>REACT</span>
      </SkillGroup>
      <SkillGroup>
        <img src={vue} />
        <span>VUE</span>
      </SkillGroup>
      <SkillGroup>
        <img src={sass} />
        <span>SASS</span>
      </SkillGroup>
      <SkillGroup>
        <img src={node} />
        <span>NODE</span>
      </SkillGroup>
      <SkillGroup>
        <img src={sql} />
        <span>MONGO DB</span>
      </SkillGroup>
      <SkillGroup>
        <img src={mongo} />
        <span>SQL</span>
      </SkillGroup>
    </React.Fragment>
  )
}
