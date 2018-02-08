import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter } from "react-router-dom"
import reduxThunk from "redux-thunk"

import Routes from "./Routes"
import Navbar from "./components/Navbar"
import rootReducer from "./data/reducers"
import { AUTH_USER } from "./data/actions/constants"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)
const token = localStorage.getItem("token")

// If we have a token, the user should be authenticated and app state updated
token && store.dispatch({ type: AUTH_USER })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
