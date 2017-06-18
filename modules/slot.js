import { createAction } from 'redux-actions'

export const START = 'modules/slot/START'
export const END = 'modules/slot/END'

export const start = createAction(START)
export const end = createAction(END)

const slotReducer = (state = {
  isAnimatig: false
}, action) => {
  switch (action.type === START) {
    case START:
      return Object.assign({},
        state,
        { isAnimatig: true }
      )
    case END:
      return Object.assign({},
        state,
        { isAnimatig: false }
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
