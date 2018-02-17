import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter } from "react-router-dom"
import reduxThunk from "redux-thunk"

import Routes from "./Routes"
import NavBar from "./components/Navbar"
import rootReducer from "./data/reducers"
import { AUTH_USER } from "./data/actions/constants"

const token = localStorage.getItem("token"),
  store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

// If users have tokens, they should be authenticated and app state updated
token && store.dispatch({ type: AUTH_USER })

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
