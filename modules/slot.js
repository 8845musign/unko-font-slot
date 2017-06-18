import { createAction } from 'redux-actions'

// アニメーション時間 60FPS
const ANIMATION_TIME = 60 * 3

export const START = 'modules/slot/START'
export const END = 'modules/slot/END'
export const ANIME = 'modules/slot/ANIME'

export const start = createAction(START)
export const end = createAction(END)
export const anime = createAction(ANIME)

const slotReducer = (state = {
  isAnimating: false,
  frame: 0
}, action) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        { isAnimating: true }
      )
    case END:
      return Object.assign({},
        state,
        {
          isAnimating: false,
          frame: 0
        }
      )
    case ANIME:
      return Object.assign({},
        state,
        { frame: state.frame + 1 }
      )
    default:
      return state
  }
}

export default slotReducer

export const slotStartMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const loop = () => {
      dispatch(anime())

      const state = getState()

      if (state.slot.frame <= ANIMATION_TIME) {
        window.requestAnimationFrame(loop)
      } else {
        dispatch(end())
      }
    }
    loop()
  }

  next(action)
}
