import React from "react"
import Form from "./formReview"

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

const UserForm = props => {
  return (
    <div>
      <h2>Vaše iskustvo:</h2>
      <Form id="root"></Form>
      <button onClick={() => setUser({})}>ODJAVA</button>
    </div>
  )
}

export default UserForm
