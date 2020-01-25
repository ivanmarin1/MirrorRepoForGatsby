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
      // const img = data.collectionOneImages.edges.map(edge => (
      //   <Img fluid={edge.node.childImageSharp.fluid}></Img>
      // ))

      //displaying correct apartment because apartment 1 !== apartment[0]

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
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
      }
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

export class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apart: this.props.data.collectionOneImages.edges,
    }
    var apart = this.props.data.collectionOneImages.edges
    // in state we have stored the images as well as current index of image and translate value
    if (this.props.apartment.frontmatter.title === "Apartment 1") {
      this.setState = {
        apart: this.props.data.collectionOneImages.edges,
      }
    }
    if (this.props.apartment.frontmatter.title === "Apartment 2") {
      this.setState = {
        apart: this.props.data.collectionTwoImages.edges,
      }
    }
    if (this.props.apartment.frontmatter.title === "Apartment 3") {
      this.setState = {
        apart: this.props.data.collectionThreeImages.edges,
      }
    }
    if (this.props.apartment.frontmatter.title === "Apartment 4") {
      this.setState = {
        apart: this.props.data.collectionFourImages.edges,
      }
    }
    if (this.props.apartment.frontmatter.title === "Apartment 5") {
      this.setState = {
        apart: this.props.data.collectionFiveImages.edges,
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.apartment.frontmatter.title !==
      prevProps.apartment.frontmatter.title
    ) {
      if (this.props.apartment.frontmatter.title === "Apartment 1") {
        this.setState = {
          apartm: this.props.data.collectionOneImages.edges,
        }
      }
      if (this.props.apartment.frontmatter.title === "Apartment 2") {
        this.setState(this.props.data.collectionTwoImages.edges)
      }
      if (this.props.apartment.frontmatter.title === "Apartment 3") {
        this.setState = {
          apartm: this.props.data.collectionThreeImages.edges,
        }
      }
      if (this.props.apartment.frontmatter.title === "Apartment 4") {
        this.setState = {
          apartm: this.props.data.collectionFourImages.edges,
        }
      }
      if (this.props.apartment.frontmatter.title === "Apartment 5") {
        this.setState = {
          apartm: this.props.data.collectionFiveImages.edges,
        }
      }
    }
  }
  render() {
    return <SlideSync apart={this.state.apart}></SlideSync>
  }
}
