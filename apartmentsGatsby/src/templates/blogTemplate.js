import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Layout>
        <div className="blog-post">
          <div
            style={{
              border: "1px solid #b2b5ae",
              margin: "10% 0 10% 0",
              maxWidth: "900px",
              width: "70%",
              margin: "50px auto",
            }}
          >
            <div style={{ backgroundColor: "#8d9cfc", padding: "15px" }}>
              <h3>{frontmatter.author}</h3>
            </div>
            <div style={{ padding: "15px" }}>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`
