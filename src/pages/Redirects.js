import React, { Component } from "react"
import { connect } from "react-redux"

// These components redirect after user events
export const Success = () => {
  return (
    <div className="redirect">
      <img src="public/images/access-granted.png" alt="access granted image" />
      <h3>You have successfully entered.</h3>
    </div>
  )
}

export const Failure = () => {
  return (
    <div className="redirect">
      <img src="public/images/access-denied.png" alt="access denied image" />
      <h3>
        Access Denied.<br />
        You are not authorized.
      </h3>
    </div>
  )
}

// Redirect after successful user creation
class NewUserCreated extends Component {
  render() {
    return (
      <div className="redirect">
        <img src="public/images/new-user.png" alt="new user image" />
        <h3>{this.props.signupSuccess}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { signupSuccess } }) => ({ signupSuccess })

export default connect(mapStateToProps)(NewUserCreated)
