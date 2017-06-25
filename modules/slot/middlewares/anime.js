import { ANIME } from '../'

const PATTERN_HEIGHT = 750
const MIN_SPEED = 5
const RESISTANCE = 0.99

const moveTop = (top, speed) => {
  let moveTop = top - speed

  // loop
  if (moveTop < -(PATTERN_HEIGHT * 3)) moveTop = 0

  return moveTop
}

const calcNextSpeed = (prevSpeed) => {
  let nextSpeed = prevSpeed * RESISTANCE

  if (nextSpeed < MIN_SPEED) nextSpeed = MIN_SPEED

  return nextSpeed
}

const slotAnimeMiddleware = ({ dispatch, getState }) => next => action => {
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

export default slotAnimeMiddleware
