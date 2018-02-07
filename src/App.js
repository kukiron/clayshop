import React from "react"
import { Route } from "react-router-dom"

// List of imports for setting routes
import Home from "./pages/home"
import Feature from "./pages/ClayShop"
import Login from "./pages/auth/Login"
import Logout from "./pages/auth/Logout"
import Signup from "./pages/auth/Signup"
import NewUserCreated, { Success, Failure } from "./pages/Redirects"
// HOCs
import RequireAuth from "./wrappers/RequireAuth"
import RequireAdmin from "./wrappers/RequireAdmin"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={RequireAdmin(Signup)} />
      <Route path="/feature" component={RequireAuth(Feature)} />
      <Route path="/success" component={RequireAuth(Success)} />
      <Route path="/failure" component={RequireAuth(Failure)} />
      <Route path="/user-created" component={RequireAdmin(NewUserCreated)} />
    </div>
  )
}

export default App
