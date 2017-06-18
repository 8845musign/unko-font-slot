import { createAction } from 'redux-actions'

export const START = 'modules/slot/START'
export const END = 'modules/slot/END'

export const start = createAction(START)
export const end = createAction(END)

const slotReducer = (state = {
  isAnimating: false
}, action) => {
  switch (action.type === START) {
    case START:
      return Object.assign({},
        state,
        { isAnimating: true }
      )
    case END:
      return Object.assign({},
        state,
        { isAnimating: false }
      )
    default:
      return state
  }
}

export default slotReducer

export const slotStartMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    setTimeout(() => {
      dispatch(end())
    }, 500)
  }

  next(action)
}
