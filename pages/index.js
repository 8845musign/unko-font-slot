import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import IndexContainer from '../components/IndexContainer'

class IndexPage extends React.Component {
  render () {
    return (
      <IndexContainer />
    )
  }
}

export default withRedux(indexStore)(IndexPage)
