import React, { Component } from "react"
import { graphql } from "gatsby"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/layout.module.css"
import ApartmentInfo from "../components/apartmentInfo"
import style from "../styles/apartments.module.css"
import Search from "../components/searchContainer"

const ApartmentsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <SEO title="Apartments" />
        <TitleBar>
          <h3>APARTMANI</h3>
        </TitleBar>
        <Apartments apartment={edges}></Apartments>
        <Search apartment={edges}></Search>
      </div>
    </Layout>
  )
}

export default ApartmentsPage

export class Apartments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ActiveApart: this.props.apartment[0],
    }
    this._onButtonClick = this._onButtonClick.bind(this)
  }

  _onButtonClick(value) {
    this.setState({
      ActiveApart: this.props.apartment[value],
    })
  }
  render() {
    return (
      <div className={style.apartments}>
        <div>
          <ul>
            <button
              className={style.button}
              onClick={() => this._onButtonClick("0")}
            >
              Apartman 1
            </button>
            <button
              className={style.button}
              onClick={() => this._onButtonClick("1")}
            >
              Apartman 2
            </button>
            <button
              className={style.button}
              onClick={() => this._onButtonClick("2")}
            >
              Apartman 3
            </button>
            <button
              className={style.button}
              onClick={() => this._onButtonClick("3")}
            >
              Apartman 4
            </button>
            <button
              className={style.button}
              onClick={() => this._onButtonClick("4")}
            >
              Apartman 5
            </button>
          </ul>
        </div>
        <div className={style.singleApart}>
          <ApartmentInfo
            key={this.state.ActiveApart.node.id}
            apartment={this.state.ActiveApart.node}
          ></ApartmentInfo>
        </div>
      </div>
    )
  }
}

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
          html
        }
      }
    }
  }
`
