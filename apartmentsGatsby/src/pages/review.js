import React from "react"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/formReview"

const ReviewPage = () => (
  <Layout>
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <SEO title="Reviews" />
      <TitleBar>
        <h3>RECENZIJE</h3>
      </TitleBar>
      <p>
        Ovdje možete pronaći iskustva naših gostiju te ukoliko želite, možete
        ostaviti vaše osobno iskustvo.
      </p>
      <div style={{ border: "1px solid #b2b5ae", margin: "10% 0 10% 0" }}>
        <div style={{ backgroundColor: "#8d9cfc", padding: "15px" }}>
          <h3>John Doe</h3>
        </div>
        <div style={{ padding: "15px" }}>
          <p>
            Vrlo lijep ugođaj, savršeno osoblje, usluga na nivou. Baška Voda je
            mirno mjesto, savšeno za odmor i uživanje. Apartman nas je dočekao
            čist te sve pohvale za domaćina. Također je i web stranica odlično
            napravljena, pohvalite programera ;)
          </p>
        </div>
      </div>
      <div>
        <h2>Vaše iskustvo:</h2>
        <Form id="root"></Form>
      </div>
    </div>
  </Layout>
)

export default ReviewPage
