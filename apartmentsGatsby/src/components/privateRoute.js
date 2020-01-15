import React, { Component } from "react"
import { isLoggedIn } from "../services/auth"
import Login from "./login"
import { Location } from "@reach/router"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // console.log(location.pathname)

  if (!isLoggedIn() && Component.pathname !== `/app/login`) {
    return <Login></Login>
  }
  return <Component {...rest} />
}

export default PrivateRoute
