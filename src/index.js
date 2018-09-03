import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter } from "react-router-dom"
import reduxThunk from "redux-thunk"

import "./app.styl"
import Routes from "./Routes"
import NavBar from "./components/Navbar"
import rootReducer from "./data/reducers"
import { fetchUserAccess } from "./data/actions"
import { AUTH_USER } from "./data/actions/constants"

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))
const token = localStorage.getItem("token")
// If users have tokens, they should be authenticated and app state updated
if (token) {
  store.dispatch({ type: AUTH_USER })
  store.dispatch(fetchUserAccess())
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
