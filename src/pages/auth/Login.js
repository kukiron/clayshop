import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import { renderTextField, renderError, validate } from "./form-helpers"
import { authenticateUser } from "../../data/actions"
import { AuthButtons } from "../../components/Buttons"

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
        <div>{renderError(loginErrorMsg)}</div>
        <AuthButtons label="Log in" />
      </form>
    )
  }
}

const mapStateToProps = ({ auth: { loginErrorMsg } }) => ({
  loginErrorMsg
})

export default reduxForm({
  form: "login",
  validate
})(connect(mapStateToProps, { authenticateUser })(Login))
