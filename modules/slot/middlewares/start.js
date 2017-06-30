import _ from 'lodash'

import {
  START,
  anime,
  end
} from '../'

import {
  start as startConfetti,
  end as endConfetti
} from '../../confetti'

const createPattern = (state) => {
  const { game, members } = state
  const { selected } = game

  const chance = selected[selected.length - 1]

  const dummy = members.allIds.filter(id => id !== chance)
  const d = _.shuffle(dummy).slice(0, 2)

  return [
    ...d,
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
        dispatch(startConfetti())
      }
    }
    window.requestAnimationFrame(loop)
    dispatch(endConfetti())
  }

  next(action)
}

export default slotStartMiddleware
