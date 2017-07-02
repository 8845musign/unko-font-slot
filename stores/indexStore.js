import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'

import gameReducer, {
  lotteryMiddleware,
  selectMiddleware
} from '../modules/game'
import membersReducer from '../modules/members'
import slotReducer, { middlewares as slotMiddlewares } from '../modules/slot'
import confettiReducer, { middlewares as confettiMiddlewares } from '../modules/confetti'
import resultReducer from '../modules/result'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(
  lotteryMiddleware,
  selectMiddleware,
  ...slotMiddlewares,
  ...confettiMiddlewares
))

const rootReducer = combineReducers({
  game: gameReducer,
  members: membersReducer,
  slot: slotReducer,
  confetti: confettiReducer,
  result: resultReducer
})

const indexStore = (initialState) => {
  return createStore(rootReducer, initialState, enhancer)
}

export default indexStore
