import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { lottery } from '../modules/game'

import Slot from './Slot'

const onClick = select => () => {
  select(1)
}

class IndexContainer extends Component {
  render () {
    return (
      <div>
        <Link href='result'><a>result</a></Link>

        <Slot
          pattern={this.props.pattern}
          members={this.props.members}
          reelTop={this.props.reelTop}
        />

        <button onClick={onClick(this.props.lottery)} disabled={this.props.isEnd || this.props.isAnimating}>next</button>
      </div>
    )
  }
}

IndexContainer.propTypes = {
  isEnd: PropTypes.bool.isRequired,
  members: PropTypes.object.isRequired,
  lottery: PropTypes.func.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  pattern: PropTypes.array.isRequired,
  reelTop: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    isEnd: state.game.isEnd,
    members: state.members.byId,
    isAnimating: state.slot.isAnimating,
    pattern: state.slot.pattern,
    reelTop: state.slot.reelTop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lottery: bindActionCreators(lottery, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)
