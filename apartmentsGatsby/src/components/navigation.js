import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Navigation = ({ menuItems }) => {
  const data = Array.from(menuItems)
  const menus = data.map(({ text, link, number }) => (
    <Link
      activeClassName="active"
      className={number}
      style={{
        display: "inline-block",
        margin: "0",
        width: "25%",
        textAlign: "center",
        padding: "10px 0",
        color: "white",
        textDecoration: "none",
        font: "17px Play, sans-serif",
        fontStyle: "normal",
      }}
      to={link}
    >
      {text}
    </Link>
  ))
  return (
    <div
      style={{
        backgroundColor: "#8B8ED0",
        overflow: "hidden",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <ul
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: 0,
        }}
      >
        {menus}
        <hr />
      </ul>
    </div>
  )
}

export default Navigation
