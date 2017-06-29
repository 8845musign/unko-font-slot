import { createAction } from 'redux-actions'
import _ from 'lodash'

const STAGE_HEIGHT = 1080
const STAGE_WIDTH = 1920

const TAPE_MAX = 70

const START = 'modules/confetti/START'
const MOVE = 'modules/confetti/MOVE'
const END = 'modules/confetti/END'

export const start = createAction(START)
export const move = createAction(MOVE)
export const end = createAction(END)

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
  const newTapes = _.cloneDeep(tapes)
  const moveTapes = newTapes.map((tape) => {
    tape.x = tape.x + tape.speedX
    tape.y = tape.y + tape.speedY

    return tape
  })

  const filteredTapes = moveTapes.filter((tape) => {
    return (
      tape.x >= 0 &&
      tape.x <= STAGE_WIDTH &&
      tape.y >= 0 &&
      tape.y <= STAGE_HEIGHT
    )
  })

  if (filteredTapes) {
    return filteredTapes
  } else {
    return []
  }
}

const createTape = () => {
  return {
    x: Math.floor(Math.random() * (STAGE_WIDTH + 1)),
    y: 0,
    speedX: 5 - Math.floor(Math.random() * 11),
    speedY: 2 + Math.floor(Math.random() * 11)
  }
}

const animeMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const loop = () => {
      dispatch(move())

      const state = getState()
      if (state.confetti.isAnimating) {
        window.requestAnimationFrame(loop)
      }
    }

    window.requestAnimationFrame(loop)
  }

  next(action)
}

const moveMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState()

  if (action.type === MOVE && state.confetti.isAnimating === false) {
    action.payload = []
  } else if (action.type === MOVE) {
    const { tapes } = state.confetti

    const movedTapes = moveTapes(tapes)

    if (movedTapes.length === 0) {
      for (let i = 0; i < 50; i++) {
        movedTapes.push(createTape())
      }
    }

    if (movedTapes.length < TAPE_MAX) {
      movedTapes.push(createTape())
    }

    action.payload = movedTapes
  }

  next(action)
}

export const middlewares = [
  animeMiddleware,
  moveMiddleware
]
