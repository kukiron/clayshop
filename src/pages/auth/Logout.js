import React, { Component } from "react"
import { connect } from "react-redux"

import { logoutUser } from "../../data/actions"

class Signout extends Component {
  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="logout">
        <img src="assets/images/user-logout.png" alt="logged out image" />
        <h2>You are logged out of ClayShop.</h2>
      </div>
    )
  }
}

export default connect(
  null,
  { logoutUser }
)(Signout)
