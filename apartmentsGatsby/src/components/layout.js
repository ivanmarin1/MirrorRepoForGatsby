import React from "react"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { StaticQuery, graphql } from "gatsby"

const menuItems = props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            menuItems {
              text
              link
              number
            }
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <Header></Header>
        <Navigation menuItems={data.site.siteMetadata.menuItems}></Navigation>
        <div style={{ width: "70%", margin: "5% auto", textAlign: "center" }}>
          {props.children}
        </div>
        <Footer></Footer>
      </div>
    )}
  ></StaticQuery>
)

// const Layout = props => {
//   return (
//     <div className="layout">
//       <Header></Header>
//       <Navigation menuItems={data.site.siteMetadata.menuItems}></Navigation>
//       {props.children}
//       <Footer></Footer>
//     </div>
//   )
// }

export default menuItems
