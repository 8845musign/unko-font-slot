import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import ResultContainer from '../components/resultContainer'

class ResultPage extends React.Component {
  render () {
    return (
      <ResultContainer />
    )
  }
}

export default withRedux(indexStore)(ResultPage)
