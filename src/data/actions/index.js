import "babel-polyfill"
import axios from "axios"

import {
  FETCH_USERS,
  FETCH_DATA,
  AUTH_USER,
  UNAUTH_USER,
  SIGNUP_USER,
  DELETE_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  DELETE_ERROR,
  REMOVE_ERROR
} from "./constants"

const ROOT_URL = "https://api-clayshop.herokuapp.com"

// Add new user
export const signupUser = ({
  fullname,
  email,
  password,
  access,
  history
}) => async dispatch => {
  try {
    const response = await axios.post(`${ROOT_URL}/signup`, {
      fullname,
      email,
      password,
      access
    })
    dispatch({
      type: SIGNUP_USER,
      payload: response.data.message
    })
    history.push("/user-created")
  } catch ({ response }) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: response.data.error
    })
  }
}

// Authenticate current users
export const authenticateUser = ({
  email,
  password,
  history
}) => async dispatch => {
  try {
    const response = await axios.post(`${ROOT_URL}/login`, {
      email,
      password
    })
    dispatch({ type: AUTH_USER })
    localStorage.setItem("token", response.data.token)
    history.push("/clayshop")
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_ERROR,
      payload: "Invalid email or password"
    })
  }
}

// delete existing user
export const deleteUser = (id, { history }) => async dispatch => {
  try {
    const response = await axios.delete(`${ROOT_URL}/delete`, {
      params: { id }
    })
    dispatch({
      type: DELETE_USER,
      payload: response.data.success
    })
    history.push("/user-deleted")
  } catch ({ response }) {
    dispatch({
      type: DELETE_ERROR,
      payload: response.data.error
    })
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

// Remove dangling error messages on route change
export const routeChange = () => ({
  type: REMOVE_ERROR,
  payload: ""
})
