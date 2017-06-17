import { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import List from './result/List'

class resultContainer extends Component {
  render () {
    return (
      <div>
        <Link href='/'><a>bingo</a></Link>
        
        <List
          selected={this.props.selected}
          member={this.props.member}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.game.selected,
    member: state.member
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(resultContainer)
