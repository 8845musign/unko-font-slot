import {
  START,
  anime,
  end
} from '../'

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

const slotStartMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const state = getState()
    const pattern = createPattern(state)
    action.payload = pattern

    const loop = () => {
      dispatch(anime())
      const state = getState()

      const { reelSpeed, reelTop } = state.slot
      if (reelSpeed > 10 || (reelTop > -1500 || reelTop < -1520)) {
        window.requestAnimationFrame(loop)
      } else {
        dispatch(end())
      }
    }
    window.requestAnimationFrame(loop)
  }

  next(action)
}

export default slotStartMiddleware
