import React from "react"
import { Route, Switch } from "react-router-dom"

// List of imports for setting routes
import Home from "./pages/home"
import ClayShop from "./pages/ClayShop"
import Login from "./pages/auth/Login"
import Logout from "./pages/auth/Logout"
import Signup from "./pages/auth/Signup"
import DeleteUser from "./pages/DeleteUser"
import NotFound from "./pages/NotFound"
import {
  AuthSuccess,
  AuthFailure,
  NewUserCreated,
  UserDeleted
} from "./pages/Redirects"
// HOCs
import RequireAuth from "./wrappers/RequireAuth"
import RequireAdmin from "./wrappers/RequireAdmin"
import RouteChangeWrapper from "./wrappers/RouteChangeWrapper"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/signup" component={RequireAdmin(Signup)} />
    <Route path="/delete-user" component={RequireAdmin(DeleteUser)} />
    <Route path="/clayshop" component={RequireAuth(ClayShop)} />
    <Route path="/authorized" component={RequireAuth(AuthSuccess)} />
    <Route path="/unauthorized" component={RequireAuth(AuthFailure)} />
    <Route path="/user-created" component={RequireAdmin(NewUserCreated)} />
    <Route path="/user-deleted" component={RequireAdmin(UserDeleted)} />
    <Route component={NotFound} />
  </Switch>
)

export default RouteChangeWrapper(Routes)
