import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundContent = styled.div`
  height: 100%;

`


const ClippedBackground = (props) => (
  <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: { eq: "bg-landing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section"
          className={props.className}
          fluid={imageData}
        >
          <BackgroundContent>{props.children}</BackgroundContent>
        </BackgroundImage>
      )
    }
    }
  />
)



export default ClippedBackground;