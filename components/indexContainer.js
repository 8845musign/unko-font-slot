import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import { select } from '../modules/game'

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
        <p>{getSelectedMembarName(this.props.member, this.props.selected)}</p>

        <button onClick={onClick(this.props.select)}>next</button>
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
    select: bindActionCreators(select, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(indexContainer)
