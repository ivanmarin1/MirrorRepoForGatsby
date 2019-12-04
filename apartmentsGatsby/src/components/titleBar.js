import React from "react"

const titleBar = props => {
  return (
    <div>
      <p style={{ backgroundColor: "#7aaeeb", padding: "10px", margin: 0 }}>
        {props.children}
      </p>
    </div>
  )
}

export default titleBar
