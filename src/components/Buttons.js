import React from "react"
import { Route, Link } from "react-router-dom"

const submit = "btn btn-raised btn-primary",
  cancel = "btn btn-raised btn-danger"

// Buttons to allow users in based on authorization level
export const AccessButton = ({ door, onClick }) => (
  <Route
    render={() => (
      <button id={door} className={submit} onClick={onClick}>
        Open Door
      </button>
    )}
  />
)

// Authentication buttons for login & signup
export const AuthButtons = ({ label }) => {
  const icon = label === "Log in" ? "send" : "cloud"

  return (
    <div>
      <button className={submit} type="submit">
        {label}
        <i className="material-icons">{icon}</i>
      </button>
      <Link to="/" className={cancel}>
        Cancel
        <i className="material-icons">cancel</i>
      </Link>
    </div>
  )
}
