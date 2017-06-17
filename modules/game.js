import { createAction } from 'redux-actions'

export const INIT = 'modules/game/INIT'
export const SELECT = 'modules/game/SELECT'
export const LOTTERY = 'modules/game/LOTTERY'

export const select = createAction(SELECT, id => id)
export const lottery = createAction(LOTTERY)

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
    const selectedId = candidate[num - 1]
    dispatch(select(selectedId))
  } else {
    next(action)
  }
}

const gameReducer = (state = {
  selected: [],
  left: []
}, action) => {
  switch (action.type) {
    case SELECT:
      return Object.assign({},
        state,
        {
          selected: [...state.selected, action.payload],
          left: state.left.filter(id => id !== action.payload)
        }
      )
    default:
      return state
  }
}

export default gameReducer