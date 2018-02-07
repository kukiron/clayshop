import React from "react"

// Render text firlds for the forms
export const renderTextField = ({ label, input, meta: { touched, error } }) => {
  const type = input.name === "password" ? "password" : "text"
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        className="form-control"
        {...input}
      />
      {touched && error && <div className="text-danger">{error}</div>}
    </div>
  )
}

// Render error messages for bad request
export const renderError = error => {
  return error && <div className="alert alert-danger">{error}</div>
}

// Validate form fields
export const validate = values => {
  const errors = {},
    requiredFields = ["fullname", "email", "password"]

  requiredFields.forEach(field => {
    !values[field] && (errors[field] = "Required")
  })

  if (values.fullname && !/^[a-zA-Z ]+$/.test(values.fullname))
    errors.fullname = "Use only letters"

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  )
    errors.email = "Invalid email address"

  return errors
}
