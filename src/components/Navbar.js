import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

const NavBar = ({ authenticated, userAccess }) => {
  // Navbar for authenticated users
  const authenticatedUser = () => [
    <li key={1}>
      <NavLink to="/clayshop">ClayShop</NavLink>
    </li>,
    <li key={2}>
      <NavLink to="/logout">Logout</NavLink>
    </li>
  ]

  // Navbar for unauthenticated users
  const unauthenticatedUser = () => (
    <li>
      <NavLink to="/login">User Access</NavLink>
    </li>
  )

  // Navigation link only for Admin to create & delete user
  const adminNavLink = () =>
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

  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {authenticated ? authenticatedUser() : unauthenticatedUser()}
        {adminNavLink()}
      </ul>
    </div>
  )
}

const mapStateToProps = ({
  auth: { authenticated },
  users: { userAccess }
}) => ({
  authenticated,
  userAccess
})

export default connect(mapStateToProps)(NavBar)
