import {
  LOGIN_ERROR,
  SIGNUP_ERROR,
  REMOVE_ERROR,
  DELETE_ERROR
} from "../actions/constants"

// Reducer for errors generating events
export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_ERROR:
      return { ...state, loginErrorMsg: payload }

    case SIGNUP_ERROR:
      return { ...state, signupErrorMsg: payload }

    case REMOVE_ERROR:
      return { ...state, loginErrorMsg: payload, signupErrorMsg: payload }

    case DELETE_ERROR:
      return { ...state, deleteErrorMsg: payload }
  }
  return state
}
