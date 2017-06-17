import { createStore, combineReducers } from 'redux'

import gameReducer from '../modules/game'
import memberReducer from '../modules/member'

const rootReducer = combineReducers({
  game: gameReducer,
  member: memberReducer
})

const indexStore = () => {
  return createStore(rootReducer)
}

export default indexStore
