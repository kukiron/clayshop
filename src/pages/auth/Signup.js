import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import {
  renderTextField,
  renderError,
  validate,
  showPassword
} from "./form-helpers"
import { signupUser } from "../../data/actions"
import { AuthButtons } from "../../components/Buttons"

// Form component using redux-form
class Signup extends Component {
  renderSelectField({ input }) {
    return (
      <div className="form-group">
        <label>Door Access</label>
        <select className="form-control" {...input}>
          <option value="">Select door option</option>
          <option value="Front">Front</option>
          <option value="Storage">Storage</option>
          <option value="Both">Both</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    )
  }

  onFormSubmit({ fullname, email, password, access }) {
    const { signupUser, history } = this.props
    signupUser({ fullname, email, password, access, history })
  }

  render() {
    const { handleSubmit, signupErrorMsg } = this.props
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field label="Fullname" name="fullname" component={renderTextField} />
        <Field label="Email" name="email" component={renderTextField} />
        <Field label="Password" name="password" component={renderTextField} />
        <input type="checkbox" onClick={showPassword} />
        <Field name="access" component={this.renderSelectField} />
        <div>{renderError(signupErrorMsg)}</div>
        <AuthButtons label="Create Account" />
      </form>
    )
  }
}

const mapStateToProps = ({ errors: { signupErrorMsg } }) => ({
  signupErrorMsg
})

export default reduxForm({
  form: "singup",
  validate
})(connect(mapStateToProps, { signupUser })(Signup))
