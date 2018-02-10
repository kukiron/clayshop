import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

// Import reducers
import authReducer from "./auth_reducer"
import errorsReducer from "./erros_reducer"
import usersReducer from "./users_reducer"

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorsReducer,
  users: usersReducer
})

export default rootReducer
