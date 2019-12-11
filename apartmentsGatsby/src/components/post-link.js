import React from "react"
import { Link } from "gatsby"
import { checkPropTypes } from "prop-types"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <div style={{ border: "1px solid #b2b5ae", margin: "10% 0 10% 0" }}>
        <div style={{ backgroundColor: "#8d9cfc", padding: "15px" }}>
          <h3>{post.frontmatter.author}</h3>
        </div>
        <div style={{ padding: "15px" }}>
          {post.excerpt} ({post.frontmatter.date})
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
