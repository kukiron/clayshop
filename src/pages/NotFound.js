import React from "react"
import { Link } from "react-router-dom"

// Set component for unmatched path
export default ({ location }) => (
  <div className="no-match">
    <br />
    <h4>
      No match for the path <code>{location.pathname}</code>
      <br />
      <br />
      <Link className="btn btn-success" to="/">
        Back to Home
        <i class="material-icons">home</i>
      </Link>
    </h4>
  </div>
)
