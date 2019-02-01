import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ABOUT_ME_PIC_QUERY = graphql`
  query {
    profilePic: file(relativePath: { eq: "about-me-azulado.jpg" }) {
      childImageSharp {
        fixed(width: 200, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const ProfilePicture = () => {
  return (
    <StaticQuery
      query={ABOUT_ME_PIC_QUERY}
      render={data => (
        <Img
          fixed={data.profilePic.childImageSharp.fixed}
          className="profile-pic"
        />
      )}
    />
  )
}
export default ProfilePicture
