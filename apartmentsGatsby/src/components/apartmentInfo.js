import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SlideSync from "./slideSync"

const ApartmentInfo = ({ apartment }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        collectionOneImages: allFile(
          filter: { relativeDirectory: { regex: "/Apartments/A1/" } }
        ) {
          edges {
            node {
              relativePath
              name
              dir
              relativeDirectory
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        collectionTwoImages: allFile(
          filter: { relativeDirectory: { regex: "/Apartments/A2/" } }
        ) {
          edges {
            node {
              relativePath
              name
              dir
              relativeDirectory
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        collectionThreeImages: allFile(
          filter: { relativeDirectory: { regex: "/Apartments/A3/" } }
        ) {
          edges {
            node {
              relativePath
              name
              dir
              relativeDirectory
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        collectionFourImages: allFile(
          filter: { relativeDirectory: { regex: "/Apartments/A4/" } }
        ) {
          edges {
            node {
              relativePath
              name
              dir
              relativeDirectory
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        collectionFiveImages: allFile(
          filter: { relativeDirectory: { regex: "/Apartments/A5/" } }
        ) {
          edges {
            node {
              relativePath
              name
              dir
              relativeDirectory
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      //displaying correct apartment images because apartment 1 !== apartment[0]

      const a1Img = data.collectionOneImages.edges
      const a2Img = data.collectionTwoImages.edges
      const a3Img = data.collectionThreeImages.edges
      const a4Img = data.collectionFourImages.edges
      const a5Img = data.collectionFiveImages.edges
      var aImg = a1Img

      if (apartment.frontmatter.title === "Apartment 1") aImg = a1Img
      if (apartment.frontmatter.title === "Apartment 2") aImg = a2Img
      if (apartment.frontmatter.title === "Apartment 3") aImg = a3Img
      if (apartment.frontmatter.title === "Apartment 4") aImg = a4Img
      if (apartment.frontmatter.title === "Apartment 5") aImg = a5Img

      return (
        <div>
          <div>
            <div
              style={{
                padding: "15px",
              }}
            >
              <h3
                style={{
                  color: "#7AAEEB",
                  textAlign: "center",
                  padding: "15px",
                }}
              >
                {apartment.frontmatter.title}
              </h3>
              <div style={{ width: "500px", margin: "0 auto" }}>
                <SlideSync apart={aImg}></SlideSync>
              </div>
              <div style={{ margin: "auto" }}>{apartment.excerpt}</div>
              <Link to="/reservation/">
                <button>REZERVIRAJ</button>
              </Link>
            </div>
          </div>
        </div>
      )
    }}
  />
)
export default ApartmentInfo
