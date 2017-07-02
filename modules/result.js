import { createAction } from 'redux-actions'

const SHOW = 'modules/result/SHOW'
const HIDE = 'modules/result/HIDE'

export const show = createAction(SHOW)
export const hide = createAction(HIDE)

const resultReducer = (state = {
  isShow: false
}, action) => {
  switch (action.type) {
    case SHOW:
      return Object.assign({},
        state,
        { isShow: true }
      )
    case HIDE:
      return Object.assign({},
        state,
        { isShow: false }
      )
    default:
      return state
  }
}

export default resultReducer
