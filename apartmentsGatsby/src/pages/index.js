import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import styles from "../styles/index.module.css"
import SplitScreen from "../components/splitScreen"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <SplitScreen>
      <div>
        <TitleBar>
          <h3>DOBRODOŠLI</h3>
        </TitleBar>
        <div>
          <p>
            Dobro došli u naše apartmane smještene u Baškoj Vodi, u podnožje
            veličanstvenoga masiva planine Biokovo, na zapadni dio Makarskoga
            primorja, u Dalmaciju, na hrvatsku obalu Jadrana!{" "}
          </p>
          <p>
            Istražite naše apartmane i izaberite smještaj koji odgovara vašim
            potrebama.
          </p>
          <p style={{ color: "#7AAEEB", fontSize: "20px", paddingTop: "2%" }}>
            Radujemo se vašem dolasku i želimo vam ugodan odmor kod nas :)
          </p>
        </div>
      </div>
      {/* <div style={{ width: "100px" }}>
          {data.allFile.edges.map(({ node }) => (
            <Img
              key={node.id}
              fluid={node.childImageSharp.fluid}
              alt="Picture of the house"
            />
          ))}
        </div> */}
      <div style={{ width: "250px" }}>
        <Image filename="house-main.jpg" alt="gatsby icon"></Image>
      </div>
    </SplitScreen>
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     allFile(filter: { absolutePath: { regex: "//images//" } }) {
//       edges {
//         node {
//           id
//           base
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
