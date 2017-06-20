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
import slotReducer, { middlewares as slotMiddlewares } from '../modules/slot'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(
  lotteryMiddleware,
  selectMiddleware,
  ...slotMiddlewares
))

const rootReducer = combineReducers({
  game: gameReducer,
  members: membersReducer,
  slot: slotReducer
})

const indexStore = () => {
  return createStore(rootReducer, {
    members: {
      byId: {
        1: {
          id: '1',
          name: 'sample taro',
          image: 'image'
        },
        2: {
          id: '2',
          name: 'sample taro1',
          image: 'image'
        },
        3: {
          id: '3',
          name: 'sample taro2',
          image: 'image'
        }
      },
      allIds: [1, 2, 3]
    }
  }, enhancer)
}

export default indexStore
