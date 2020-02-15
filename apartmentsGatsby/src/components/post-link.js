import React from "react"
import { Link } from "gatsby"
import style from "../styles/reviews.module.css"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className={style.link}>
    <div className={style.auth}>
      <h3>{post.frontmatter.author}</h3>
    </div>
    <div>
      <p>{post.excerpt}</p>
    </div>
    <div className={style.date}>
      <p>{post.frontmatter.date}</p>
    </div>
  </Link>
)

export default PostLink
