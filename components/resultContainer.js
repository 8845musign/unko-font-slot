import { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import List from './result/List'

class resultContainer extends Component {
  render () {
    return (
      <div>
        <Link href='/'><a>bingo</a></Link>

        <List
          selected={this.props.selected}
          members={this.props.members}
        />
      </div>
    )
  }
}

resultContainer.propTypes = {
  selected: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    selected: state.game.selected,
    members: state.members.byId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(resultContainer)
