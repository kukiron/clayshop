import React from "react"

// Render error messages for bad request
const renderError = error => {
  return error && <div className="alert alert-danger">{error}</div>
}

export default renderError
