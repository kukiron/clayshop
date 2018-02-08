import React from "react"
import { Route, Switch } from "react-router-dom"

// List of imports for setting routes
import Home from "./pages/home"
import ClayShop from "./pages/ClayShop"
import Login from "./pages/auth/Login"
import Logout from "./pages/auth/Logout"
import Signup from "./pages/auth/Signup"
import NotFound from "./pages/NotFound"
import NewUserCreated, { AuthSuccess, AuthFailure } from "./pages/Redirects"
// HOCs
import RequireAuth from "./wrappers/RequireAuth"
import RequireAdmin from "./wrappers/RequireAdmin"
import ResponsiveWrapper from "./wrappers/ResponsiveWrapper"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/signup" component={RequireAdmin(Signup)} />
    <Route path="/clayshop" component={RequireAuth(ClayShop)} />
    <Route path="/authorized" component={RequireAuth(AuthSuccess)} />
    <Route path="/unauthorized" component={RequireAuth(AuthFailure)} />
    <Route path="/user-created" component={RequireAdmin(NewUserCreated)} />
    <Route component={NotFound} />
  </Switch>
)

export default ResponsiveWrapper(Routes)
