import { createAction } from 'redux-actions'
import { start as startSlot } from './slot'

export const SELECT = 'modules/game/SELECT'
export const LOTTERY = 'modules/game/LOTTERY'
export const END = 'modules/game/END'

export const select = createAction(SELECT, id => id)
export const lottery = createAction(LOTTERY)
export const end = createAction(END)

const getRand = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const getLeftMembers = (state) => {
  const allIds = state.members.allIds
  const selected = state.game.selected

  return allIds.filter(member => !selected.includes(member))
}

export const lotteryMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === LOTTERY) {
    const state = getState()
    const candidate = getLeftMembers(state)

    const num = getRand(candidate.length - 1)
    const selectedId = candidate[num]
    dispatch(select(selectedId))
    dispatch(startSlot())
  } else {
    next(action)
  }
}

export const selectMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === SELECT) {
    const state = getState()
    next(action)

    if (state.game.left.length <= 1) dispatch(end())
  } else {
    next(action)
  }
}

const gameReducer = (state = {
  selected: [],
  left: [1, 2, 3],
  isEnd: false
}, action) => {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selected: [...state.selected, action.payload],
        left: state.left.filter((id) => id !== action.payload)
      }
    case END:
      return Object.assign({},
        state,
        { isEnd: true }
      )
    default:
      return state
  }
}

export default gameReducer
