import React, { Component } from "react"
import { navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import Form from "./formReview"
import Login from "./login"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  console.log(window.location.pathname)

  if (!isLoggedIn() && window.location.pathname !== `/app/login`) {
    return <Login></Login>
  }
  return <Component {...rest} />
}

export default PrivateRoute
