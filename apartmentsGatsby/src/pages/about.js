import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="About us" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "2em",
      }}
    >
      <div>
        <div style={{ backgroundColor: "#7AAEEB", padding: "15px" }}>
          <h3
            style={{
              color: "white",
              margin: 0,
              textAlign: "left",
              fontFamily: "Muli, sans-serif",
            }}
          >
            DOBRODOŠLI
          </h3>
        </div>
        <div>
          <p>
            Zaboravite svakodnevne brige i probleme, opustite se na balkonu ili
            terasi i uživajte u prekrasnom pogledu na more i susjedni otok Brač.
            Kristalno čisto, azurno plavo more brzo će vas izmamiti iz ležaljke
            i za samo par koraka naći ćete se u beskrajnom prostranstvu
            plavetnila. Uz koncert cvrčaka, ispratite vaš sunčani dan ili
            prošetajte do malog, ali veoma živog, mjesta Baške Vode.
          </p>
          <p>
            U Baškoj Vodi vas čekaju različiti restorani, kafići, pekare,
            dućani, pošta te lučica za brodove ukoliko posjedujete jedan.
            Predivna slika vrijedna posjete je večernji povratak brodova u luku.
            Tko voli aktivniji odmor može puno toga naći u okolici mjesta,
            domaćini će vas rado savjetovati.
          </p>
        </div>
      </div>
      <div>
        <Image filename="baska-voda-plaza.jpg" alt="baska_plaza"></Image>
      </div>
    </div>
  </Layout>
)

export default SecondPage
