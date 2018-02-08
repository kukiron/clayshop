import React from "react"

// Render text firlds for the forms
export const renderTextField = ({ label, input, meta: { touched, error } }) => {
  const type = input.name === "password" ? "password" : "text",
    className = `form-control ${type}`

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} placeholder={label} className={className} {...input} />
      {touched && error && <div className="text-danger">{error}</div>}
    </div>
  )
}

// Render error messages for bad request
export const renderError = error => {
  return error && <div className="alert alert-danger">{error}</div>
}

// Toggle input type to show password in login & signup forms
export const showPassword = () => {
  const field = document.querySelector(".password"),
    isPassword = field.type === "password"

  field.type = isPassword ? "text" : "password"
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
