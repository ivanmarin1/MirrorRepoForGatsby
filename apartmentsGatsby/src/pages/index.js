import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import SplitScreen from "../components/splitScreen"
import Slideshow from "../components/carousel"
import styles from "../styles/layout.module.css"
import apartStyle from "../styles/apartments.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Slideshow></Slideshow>
    <div className={styles.mainContainer}>
      <SplitScreen>
        <div>
          <TitleBar>
            <h3>DOBRODOŠLI</h3>
          </TitleBar>
          <div>
            <p>
              Dobro došli u naše apartmane smještene u Baškoj Vodi, u podnožje
              veličanstvenoga masiva planine Biokovo, na zapadni dio Makarskoga
              primorja, u Dalmaciju, na hrvatsku obalu Jadrana!
            </p>
            <p>
              Istražite naše apartmane i izaberite smještaj koji odgovara vašim
              potrebama.
            </p>
            <p style={{ marginTop: "" }}>
              Ukoliko ste spremni za rezervirati, slobodno ispunite našu formu
              te rezervirajte vaš odmor :)
            </p>
            <button className={apartStyle.contrastButton}>REZERVIRAJ</button>
          </div>
        </div>
        <div>
          <Image filename="house-main.jpg" alt="gatsby icon"></Image>
        </div>
      </SplitScreen>
      <p
        style={{
          textAlign: "center",
          color: "#7AAEEB",
          fontSize: "20px",
          paddingTop: "2%",
        }}
      >
        Radujemo se vašem dolasku i želimo vam ugodan odmor kod nas :)
      </p>
    </div>
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
