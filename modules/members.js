const membersReducer = (state = {
  byId: {
    1: {
      id: '1',
      name: 'sample taro',
      image: 'image'
    },
    2: {
      id: '2',
      name: 'sample taro1',
      image: 'image'
    },
    3: {
      id: '3',
      name: 'sample taro2',
      image: 'image'
    }
  },
  allIds: [1, 2, 3]
}, action) => {
  return state
}

export default membersReducer
