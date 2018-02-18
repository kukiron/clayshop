import React from "react"
import { connect } from "react-redux"

// Redirect user after successful access
export const AuthSuccess = () => (
  <div className="redirect">
    <img src="public/images/access-granted.png" alt="access granted image" />
    <h3>You have successfully entered</h3>
  </div>
)

// Redirect user if no authorization for access
export const AuthFailure = () => (
  <div className="redirect">
    <img src="public/images/access-denied.png" alt="access denied image" />
    <h3>
      Access Denied.<br />
      You are not authorized
    </h3>
  </div>
)

// Redirect after successful user creation
const SignupSuccessPage = ({ signupSuccess }) => (
  <div className="redirect">
    <img src="public/images/new-user.png" alt="new user image" />
    <h3>{signupSuccess}</h3>
  </div>
)

export const NewUserCreated = connect(({ auth: { signupSuccess } }) => ({
  signupSuccess
}))(SignupSuccessPage)

// Redirect after admin deleting an existing user
const DeleteSuccessPage = ({ deleteSuccess }) => (
  <div className="redirect">
    <img src="public/images/user-deleted.png" alt="delete user image" />
    <h3>{deleteSuccess}</h3>
  </div>
)

export const UserDeleted = connect(({ auth: { deleteSuccess } }) => ({
  deleteSuccess
}))(DeleteSuccessPage)
