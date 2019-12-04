import React from "react"

const splitScreen = props => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "2em",
      }}
    >
      {props.children}
    </div>
  )
}

export default splitScreen
