import React from "react"
import TitleBar from "../components/titleBar"
import SplitScreen from "../components/splitScreen"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ReservationPage = () => (
  <Layout>
    <SEO title="Reservation" />
    <TitleBar>
      <h3>REZERVACIJE</h3>
    </TitleBar>
    <Image filename="house-main" alt="Main house"></Image>
  </Layout>
)

export default ReservationPage
