import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import { init } from '../modules/initial'
import IndexContainer from '../components/IndexContainer'

const members = {
  1: {
    'name': 'Dummy1',
    'image': '/static/images/photos/dummy-1.jpg'
  },
  2: {
    'name': 'Dummy2',
    'image': '/static/images/photos/dummy-2.jpg'
  },
  3: {
    'name': 'Dummy3',
    'image': '/static/images/photos/dummy-3.jpg'
  }
}

class IndexPage extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(init(members))

    return store.getState()
  }

  render () {
    return (
      <IndexContainer />
    )
  }
}

export default withRedux(indexStore)(IndexPage)
