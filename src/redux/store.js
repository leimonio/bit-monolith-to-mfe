import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import { AuthReducer } from './auth/reducer'
import { loginreducer } from './login/reducer'
import { MoviesReducer } from './movies/reducer'
import { registerReducer } from './registration/reducer'

const rootReducers = combineReducers({
  Movies: MoviesReducer,
  login: loginreducer,
  register: registerReducer,
  auth: AuthReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
