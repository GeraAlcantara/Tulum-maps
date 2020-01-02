import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from "gatsby-background-image"

const Backgroundsection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tulum.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            height: `100vh`,
            overflow: `hidden`,
            backgroundColor: `rgb(0, 122, 130)`
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const Bgimage = Backgroundsection


export default Bgimage

