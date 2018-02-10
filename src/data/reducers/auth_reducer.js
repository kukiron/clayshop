import { AUTH_USER, UNAUTH_USER, SIGNUP_USER } from "../actions/constants"

// Reducer for user authentication events
export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_USER:
      return { ...state, loginErrorMsg: "", authenticated: true }

    case UNAUTH_USER:
      return { ...state, authenticated: false }

    case SIGNUP_USER:
      return { ...state, signupErrorMsg: "", signupSuccess: payload }
  }
  return state
}
