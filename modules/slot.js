import { createAction } from 'redux-actions'

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
  reelTop: 0,
  reelSpeed: 20
}, action) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isAnimating: true,
          pattern: action.payload,
          reelTop: 0,
          reelSpeed: 40
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
          reelTop: action.payload.top,
          reelSpeed: action.payload.speed
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

      const { reelSpeed, reelTop } = state.slot
      if (reelSpeed > 2 || (reelTop > -200 || reelTop < -203)) {
        window.requestAnimationFrame(loop)
      } else {
        dispatch(end())
      }
    }
    window.requestAnimationFrame(loop)
  }

  next(action)
}

const moveTop = (top, speed) => {
  let moveTop = top - speed

  // loop
  if (moveTop < -300) moveTop = 0

  return moveTop
}

const calcNextSpeed = (prevSpeed) => {
  const resistance = 0.98
  let nextSpeed = prevSpeed * resistance

  if (nextSpeed < 2) nextSpeed = 2

  return nextSpeed
}

export const slotAnimeMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === ANIME) {
    const state = getState()

    const speed = state.slot.reelSpeed
    const top = moveTop(state.slot.reelTop, speed)
    action.payload = {
      top: top,
      speed: calcNextSpeed(speed)
    }
  }

  next(action)
}
