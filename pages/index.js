import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import Index from '../components/indexContainer'

class IndexPage extends React.Component {
  render () {
    return (
      <Index />
    )
  }
}

export default withRedux(indexStore)(IndexPage)
