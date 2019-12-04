import React from "react"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ReviewPage = () => (
  <Layout>
    <SEO title="Reviews" />
    <TitleBar>
      <h3>RECENZIJE</h3>
    </TitleBar>
    <Image filename="house-main" alt="Main house"></Image>
  </Layout>
)

export default ReviewPage
