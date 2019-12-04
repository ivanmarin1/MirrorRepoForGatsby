import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      width: "100%",
      backgroundColor: "#4A4EBB",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            margin: 0,
            color: "white",
            maxWidth: 960,
            fontSize: "200%",
            fontFamily: "Muli, sans-serif",
            float: "left",
          }}
        >
          APARTMANI MIRNA
        </h1>
      </div>
      <div>
        <h3
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            float: "right",
            color: "#D8D8D8",
            fontSize: "150%",
            fontFamily: "Muli, sans-serif",
            margin: 0,
          }}
        >
          Baška Voda
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
