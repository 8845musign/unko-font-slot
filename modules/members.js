import { INIT } from './initial'

const membersReducer = (state = {
  byId: {},
  allIds: []
}, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({},
        state,
        {
          byId: action.payload,
          allIds: Object.keys(action.payload)
        }
      )
    default:
      return state
  }
}

export default membersReducer
