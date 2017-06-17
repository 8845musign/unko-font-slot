import { createAction } from 'redux-actions'

export const INIT = 'modules/game/INIT'
export const SELECT = 'modules/game/SELECT'

export const select = createAction(SELECT, id => id)

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
