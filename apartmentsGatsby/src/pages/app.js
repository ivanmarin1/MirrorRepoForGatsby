import React from "react"
import { Router } from "@reach/router"
import Login from "../components/login"
import Review from "../components/userReview"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <div>
    <Router>
      <Login path="/app/login" />
    </Router>

    <PrivateRoute path="/app/userReview" component={Review} />
  </div>
)

export default App
