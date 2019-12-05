import React from "react"

const titleBar = props => {
  return (
    <div>
      <h3 style={{ backgroundColor: "#7aaeeb", padding: "10px", margin: 0 }}>
        {props.children}
      </h3>
    </div>
  )
}

export default titleBar
