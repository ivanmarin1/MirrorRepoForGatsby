import React, { Component } from "react"
import { graphql } from "gatsby"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/layout.module.css"
import ApartmentInfo from "../components/apartmentInfo"

const ApartmentsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Apartments = edges
  var ActiveApart = Apartments[0]
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <SEO title="Apartments" />
        <TitleBar>
          <h3>APARTMANI</h3>
        </TitleBar>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gridColumnGap: "20px",
          }}
        >
          <div>
            <ul>
              <button onClick={() => (ActiveApart = Apartments[0])}>
                Apartman 1
              </button>
              <button onClick={() => (ActiveApart = Apartments[1])}>
                Apartman 2
              </button>
              <button onClick={() => (ActiveApart = Apartments[2])}>
                Apartman 3
              </button>
              <button onClick={() => (ActiveApart = Apartments[3])}>
                Apartman 4
              </button>
              <button onClick={() => (ActiveApart = Apartments[4])}>
                Apartman 5
              </button>
            </ul>
          </div>
          <div style={{ margin: "20px 0 20px 0" }}>
            <ApartmentInfo
              key={ActiveApart.node.id}
              apartment={ActiveApart.node}
            ></ApartmentInfo>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ApartmentsPage

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "Apartments" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 3000)
          frontmatter {
            path
            title
            imagePath
          }
        }
      }
    }
  }
`
