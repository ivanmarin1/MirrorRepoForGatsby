import React from "react"
import Navigation from "./navigation"
import NavigationMobile from "./navigationMobile"
import Header from "./header"
import Footer from "./footer"
import Image from "./image"
import styles from "../styles/layout.module.css"
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
              iconName
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.layout}>
        <Header></Header>
        <Navigation menuItems={data.site.siteMetadata.menuItems}></Navigation>
        <NavigationMobile
          menuItems={data.site.siteMetadata.menuItems}
        ></NavigationMobile>
        <div className={styles.mainContainer}>{props.children}</div>
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
