import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNUP_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  FETCH_USERS,
  FETCH_DATA
} from "../actions/constants"

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_USER:
      return { ...state, loginErrorMsg: "", authenticated: true }

    case UNAUTH_USER:
      return { ...state, authenticated: false }

    case SIGNUP_USER:
      return { ...state, signupErrorMsg: "", signupSuccess: payload }

    case LOGIN_ERROR:
      return { ...state, loginErrorMsg: payload }

    case SIGNUP_ERROR:
      return { ...state, signupErrorMsg: payload }

    case FETCH_USERS:
      return { ...state, users: payload }

    case FETCH_DATA:
      return { ...state, access: payload }
  }

  return state
}
