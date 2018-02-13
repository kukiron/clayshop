import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class Navbar extends Component {
  // Navbar for authenticated users
  authenticatedUser() {
    return [
      <li key={2}>
        <NavLink to="/clayshop">ClayShop</NavLink>
      </li>,
      <li key={1}>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    ]
  }

  // Navbar for unauthenticated users
  unauthenticatedUser() {
    return (
      <li>
        <NavLink to="/login">User Access</NavLink>
      </li>
    )
  }

  // Navigation link only for Admin to create & delete user
  addUserLink() {
    const { authenticated, userAccess } = this.props
    return (
      authenticated &&
      userAccess === "Admin" && (
        <li>
          <a href="#">
            Admin <span className="arrow">&#9660;</span>
          </a>
          <ul className="sub-menu">
            <li>
              <NavLink to="/signup">Add User</NavLink>
            </li>
            <li>
              <NavLink to="/delete-user">Delete User</NavLink>
            </li>
          </ul>
        </li>
      )
    )
  }

  render() {
    const { authenticated } = this.props

    return (
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {authenticated
            ? this.authenticatedUser()
            : this.unauthenticatedUser()}
          {this.addUserLink()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({
  auth: { authenticated },
  users: { userAccess }
}) => ({
  authenticated,
  userAccess
})

export default connect(mapStateToProps)(Navbar)
