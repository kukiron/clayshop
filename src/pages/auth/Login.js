import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import renderError from "../../components/renderError"
import { renderTextField, validate, showPassword } from "./form-helpers"
import { AuthButtons } from "../../components/Buttons"
import { authenticateUser } from "../../data/actions"

// Form component using redux-form
class Login extends Component {
  onFormSubmit({ email, password }) {
    const { history, authenticateUser } = this.props
    authenticateUser({ email, password, history })
  }

  render() {
    const { handleSubmit, loginErrorMsg } = this.props
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field label="Email" name="email" component={renderTextField} />
        <Field label="Password" name="password" component={renderTextField} />
        <input type="checkbox" onClick={showPassword} />
        <div>{renderError(loginErrorMsg)}</div>
        <AuthButtons label="Log in" />
      </form>
    )
  }
}

const mapStateToProps = ({ errors: { loginErrorMsg } }) => ({
  loginErrorMsg
})

export default reduxForm({
  form: "login",
  validate
})(connect(mapStateToProps, { authenticateUser })(Login))
