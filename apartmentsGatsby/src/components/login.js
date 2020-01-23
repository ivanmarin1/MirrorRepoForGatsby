import React from "react"
import { handleLogin } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  ManualRefresh() {
    window.location.reload()
  }
  render() {
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            window.location.reload()
          }}
        >
          <label>
            <p style={{ display: "inline-block", padding: "20px" }}>Username</p>
            <input
              style={{ display: "inline-block" }}
              type="text"
              name="username"
              onChange={this.handleUpdate}
            />
          </label>
          <label>
            <p style={{ display: "inline-block", padding: "20px" }}>Password</p>
            <input
              style={{ display: "inline-block" }}
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <button
            onClick={event => {
              this.handleSubmit(event)
              window.location.reload()
            }}
          >
            Log In
          </button>
        </form>
      </>
    )
  }
}

export default Login
