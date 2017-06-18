import { ANIME } from '../'

const moveTop = (top, speed) => {
  let moveTop = top - speed

  // loop
  if (moveTop < -300) moveTop = 0

  return moveTop
}

const calcNextSpeed = (prevSpeed) => {
  const resistance = 0.98
  let nextSpeed = prevSpeed * resistance

  if (nextSpeed < 1) nextSpeed = 1

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
