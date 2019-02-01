import React from 'react'
import styled from 'styled-components'
import mq from '../components/shared/mixins/mediaQueries'
import ProfilePicture from '../components/about-me/profilePicture'
import AboutMeText from '../components/about-me/aboutMeText'
import Divider from '../components/shared/divider'
import flexCenter from '../components/shared/mixins/flexCenter'

const About = styled.section`
  ${flexCenter()}
  background: ${({ theme }) => theme.light};
   
  height: 95vh;
  ${
    // @ts-ignore
    mq.phone`height :100%
    margin: -16rem auto;
    
    `
  }
  margin-top: -16rem;
`
const AboutMeContainer = styled.div`
  margin-top: 16rem;
  width: 80%;
  ${// @ts-ignore
  mq.tablet`width :100%`}
  flex-wrap: wrap;
`

const AboutMeCard = styled.div`
  ${flexCenter()}
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    padding: 3rem;
  }
`

const AboutMeTextContainer = styled.div`
  width: 66%;
  ${// @ts-ignore
  mq.phone`width :100%`}
  height: 350px;
  color: whitesmoke;
  ${flexCenter()}
  flex-grow:1;
`
const AboutMeProfilePicContainer = styled.div`
  height: 350px;
  ${// @ts-ignore
  mq.phone`width :100%`}
  width: 33%;

  ${flexCenter()};
  flex-wrap: wrap;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  & img {
    border-radius: 4px;
    flex-wrap: wrap;
  }
`

export default function AboutPage() {
  return (
    <About id="About">
      <AboutMeContainer>
        <AboutMeCard>
          <AboutMeTextContainer>
            <>
              <Divider />
              <AboutMeText />
            </>
          </AboutMeTextContainer>
          <AboutMeProfilePicContainer>
            <ProfilePicture />
          </AboutMeProfilePicContainer>
        </AboutMeCard>
      </AboutMeContainer>
    </About>
  )
}
