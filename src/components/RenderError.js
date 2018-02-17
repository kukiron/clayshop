import React from "react"

// Render error messages for bad request
export default error =>
  error && <div className="alert alert-danger">{error}</div>
