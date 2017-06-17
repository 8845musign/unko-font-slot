import { createAction } from 'redux-actions'

export const SELECT = 'modules/game/SELECT'

export const select = createAction(SELECT, id => id)

const gameReducer = (state = {
  selected: []
}, action) => {
  switch (action.type) {
    case SELECT:
      return state.selected.push(action.payload)
    default:
      return state
  }
}

export default gameReducer
