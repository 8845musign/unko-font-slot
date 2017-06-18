import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'

import gameReducer, {
  lotteryMiddleware, selectMiddleware
} from '../modules/game'
import membersReducer from '../modules/members'
import slotReducer, {
  slotStartMiddleware,
  slotAnimeMiddleware
} from '../modules/slot'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(lotteryMiddleware, selectMiddleware, slotStartMiddleware, slotAnimeMiddleware))

const rootReducer = combineReducers({
  game: gameReducer,
  members: membersReducer,
  slot: slotReducer
})

const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
