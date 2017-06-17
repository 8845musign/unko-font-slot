import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { lottery } from '../modules/game'

const onClick = select => () => {
  select(1)
}

const getSelectedMembarName = (members, selected) => {
  if (selected.length <= 0) return 'press next button'

  return members[selected[selected.length - 1]].name
}

class indexContainer extends Component {
  render () {
    return (
      <div>
        <Link href='result'><a>result</a></Link>
        <p>{getSelectedMembarName(this.props.members, this.props.selected)}</p>

        <button onClick={onClick(this.props.lottery)}>next</button>
      </div>
    )
  }
}

indexContainer.propTypes = {
  selected: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired,
  lottery: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    selected: state.game.selected,
    members: state.members.byId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lottery: bindActionCreators(lottery, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(indexContainer)
