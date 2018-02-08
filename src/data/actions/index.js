require("babel-polyfill")
import axios from "axios"

import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNUP_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  FETCH_USERS,
  FETCH_DATA
} from "./constants"

const ROOT_URL = "https://api-clayshop.herokuapp.com"

// Application state for the error cases
const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

const signupError = error => {
  return {
    type: SIGNUP_ERROR,
    payload: error
  }
}

// Add new user
export const signupUser = ({
  fullname,
  email,
  password,
  access,
  history
}) => async dispatch => {
  const request = axios.post(`${ROOT_URL}/signup`, {
    fullname,
    email,
    password,
    access
  })

  try {
    const response = await request
    dispatch({
      type: SIGNUP_USER,
      payload: response.data.message
    })
    history.push("/user-created")
  } catch (err) {
    dispatch(signupError(err.response.data.error))
  }
}

// Authenticate current users
export const authenticateUser = ({
  email,
  password,
  history
}) => async dispatch => {
  const request = axios.post(`${ROOT_URL}/login`, {
    email,
    password
  })

  try {
    const response = await request
    dispatch({ type: AUTH_USER })
    localStorage.setItem("token", response.data.token)
    history.push("/clayshop")
  } catch (err) {
    console.log(err)
    dispatch(loginError("Bad login info"))
  }
}

// Fetch the list of users currently authorized
export const fetchUsers = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/users`)

  dispatch({
    type: FETCH_USERS,
    payload: response.data
  })
}

// Get the user authorization of authenticated user
export const fetchUserAccess = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/user-access`, {
    headers: { authorization: localStorage.getItem("token") }
  })

  dispatch({
    type: FETCH_DATA,
    payload: response.data
  })
}

// Remove the token & logout the user
export const logoutUser = () => {
  localStorage.removeItem("token")
  return { type: UNAUTH_USER }
}
