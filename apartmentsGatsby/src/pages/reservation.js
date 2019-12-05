import React from "react"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const ReservationPage = () => (
  <Layout>
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <SEO title="Reservation" />
      <TitleBar>
        <h3>REZERVACIJE</h3>
      </TitleBar>
      <div>
        <p>
          Ukoliko želite provesti odmor kod nas, slobodno ispunite donji
          formular te ćemo vam se mi javiti u najkraćem mogućem roku :)
        </p>
      </div>
      <Form></Form>
    </div>
  </Layout>
)

export default ReservationPage
