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
  frame: 0,
  pattern: [],
  reelTop: 0
}, action) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isAnimating: true,
          pattern: action.payload
        }
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
        {
          frame: state.frame + 1,
          reelTop: action.payload
        }
      )
    default:
      return state
  }
}

export default slotReducer

const createPattern = (state) => {
  const { game, members } = state
  const { selected } = game

  const chance = selected[selected.length - 1]

  const dummy = members.allIds.filter(id => id !== chance)

  return [
    ...dummy,
    chance
  ]
}

export const slotStartMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const state = getState()
    const pattern = createPattern(state)
    action.payload = pattern

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

const moveTop = (top) => {
  let moveTop = top - 40

  // loop
  if (moveTop < -300) moveTop = 0

  return moveTop
}

export const slotAnimeMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === ANIME) {
    const state = getState()

    const top = moveTop(state.slot.reelTop)
    action.payload = top
  }

  next(action)
}
