import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <div
        style={{
          border: "1px solid #b2b5ae",
        }}
      >
        <div
          style={{
            backgroundColor: "",
            padding: "15px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <h4>{post.frontmatter.author}</h4>
          <div style={{ margin: "auto" }}>
            {post.excerpt} ({post.frontmatter.date})
          </div>

          {/* <p>
              Vrlo lijep ugođaj, savršeno osoblje, usluga na nivou. Baška Voda
              je mirno mjesto, savšeno za odmor i uživanje. Apartman nas je
              dočekao čist te sve pohvale za domaćina. Također je i web stranica
              odlično napravljena, pohvalite programera ;)
            </p> */}
        </div>
      </div>
    </Link>
  </div>
)

export default PostLink
