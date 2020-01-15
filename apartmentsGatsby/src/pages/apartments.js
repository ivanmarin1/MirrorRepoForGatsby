import React from "react"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styles from "../styles/layout.module.css"
import { Grid } from "react-bootstrap"

const ApartmentsPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <SEO title="Apartments" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <div style={{}}>
          <TitleBar>
            <h3>APARTMANI</h3>
          </TitleBar>
          <ul>
            <li>Apartman 1</li>
            <li>Apartman 2</li>
            <li>Apartman 3</li>
            <li>Apartman 4</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default ApartmentsPage
