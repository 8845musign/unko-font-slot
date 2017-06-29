import { createAction } from 'redux-actions'
import _ from 'lodash'

const STAGE_HEIGHT = 1920
const STAGE_WIDTH = 1080

const TAPE_MAX = 300

const START = 'modules/confetti/START'
const MOVE = 'modules/confetti/MOVE'
const END = 'modules/confetti/END'

export const start = createAction(START)
export const move = createAction(MOVE)

export default (state = {
  isAnimating: false,
  tapes: []
}, action) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isAnimating: true
        }
      )
    case MOVE:
      return Object.assign({},
        state,
        {
          tapes: action.payload
        }
      )
    case END:
      return Object.assign({},
        state,
        {
          isAnimating: false,
          tapes: []
        }
      )
    default:
      return state
  }
}

const moveTapes = (tapes) => {
  const newTapes = _.deepClone(tapes)
  const moveTapes = newTapes.map((tape) => {
    tape.x = tape.x + tape.speed
    tape.y = tape.x * tape.slop
  })

  const filteredTapes = moveTapes.filter((tape) => {
    return (
      tape.x >= 0 &&
      tape.x <= STAGE_WIDTH &&
      tape.y >= 0 &&
      tape.y <= STAGE_HEIGHT
    )
  })

  return filteredTapes
}

const createTape = () => {
  return {
    x: Math.floor(Math.random() * (STAGE_WIDTH + 1)),
    y: 0,
    speed: Math.floor(Math.random() * 100),
    slop: (10 - Math.flooer(Math.random() * 6)) / 10
  }
}

const animeMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const loop = () => {
      const state = getState()

      dispatch(move)

      if (state.confetti.isAnimating) {
        window.requestAnimationFrame(loop)
      }
    }
  }

  next(action)
}

const moveMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === MOVE) {
    const state = getState
    const { tapes } = state.confetti

    const movedTapes = moveTapes(tapes)

    if (movedTapes.lenght < TAPE_MAX) {
      movedTapes.push(createTape())
    }

    action.payload = moveTapes(tapes)
  }

  next(action)
}

export const middlewares = [
  animeMiddleware,
  moveMiddleware
]
