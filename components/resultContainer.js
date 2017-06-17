import { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

class resultContainer extends Component {
  render () {
    return (
      <div>
        <Link href='/'><a>bingo</a></Link>
        page!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(resultContainer)
