import React from "react"
import TitleBar from "../components/titleBar"
import SplitScreen from "../components/splitScreen"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ApartmentsPage = () => (
  <Layout>
    <SEO title="Apartments" />
    <TitleBar>
      <h3>APARTMANI</h3>
    </TitleBar>
    <div>
      <li>Apartman 1</li>
      <li>Apartman 2</li>
      <li>Apartman 3</li>
      <li>Apartman 4</li>
    </div>
    <Image filename="house-main" alt="Main house"></Image>
  </Layout>
)

export default ApartmentsPage
