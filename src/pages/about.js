import React from 'react'
import styled from 'styled-components'
import ClippedBackground from '../components/shared/clippedBackground'
import { Controller, Scene } from 'react-scrollmagic'
import mq from '../components/shared/mixins/mediaQueries'
import ProfilePicture from '../components/about-me/profilePicture'
import AboutMeText from '../components/about-me/aboutMeText'
import Divider from '../components/shared/divider'
import BackgroundText from '../components/shared/backgroundSectionTitle'
import flexCenter from '../components/shared/mixins/flexCenter'

export default function AboutPage() {
  return (
    <About id="About">

      <AboutMeContainer>
        <AboutMeCard>
          <AboutMeTextContainer>
            <Controller>
              <Scene
                duration={300}
                classToggle={['.fade', 'fade-in-from-bottom']}
                triggerHook={'onEnter'}
                offset="-130"
              >
                <div className="fade fade-in-from-bottom">
                  <Divider />
                  <AboutMeText />
                </div>
              </Scene>
            </Controller>
          </AboutMeTextContainer>
          <AboutMeProfilePicContainer>
            <ProfilePicture />
          </AboutMeProfilePicContainer>
        </AboutMeCard>
        <BackgroundText>about</BackgroundText>
      </AboutMeContainer>
 
    </About>
  )
}

const About = styled.section`
  ${flexCenter()}
  background: ${({ theme }) => theme.light};
  transition: all 2s ease;

  height: 85vh;
  ${
    // @ts-ignore
    mq.phone`height: 100%
    margin: -16rem auto;
    `
  }

  margin-top: -16rem;

`
const AboutMeContainer = styled.div`
  margin-top: 16rem;
  width: 80%;
  position: relative;
  z-index: 10;
  ${mq.tablet`width :100%`}
  transition: all 1s ease-out;
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
  position: relative;
  ${mq.phone`width :100%`}
  height: 350px;
  color: whitesmoke;
  ${flexCenter()}
  flex-grow:1;
  text-shadow: ${({ theme }) => theme.light2} 1px 1px 0.5px;
`
const AboutMeProfilePicContainer = styled.div`
  height: 350px;
  ${mq.phone`width :100%`}
  width: 33%;

  ${flexCenter()};
  flex-wrap: wrap;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  opacity: 0.9;
  filter: drop-shadow(0 0 0.75rem black);

  & img {
    border-radius: 4px;
    flex-wrap: wrap;
  }
`
