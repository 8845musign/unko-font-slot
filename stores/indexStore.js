import { createStore, combineReducers, compose } from 'redux'

import gameReducer from '../modules/game'
import memberReducer from '../modules/member'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers()

const rootReducer = combineReducers({
  game: gameReducer,
  member: memberReducer
})

const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
