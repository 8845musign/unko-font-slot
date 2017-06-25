import { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import List from './result/List'

class ResultContainer extends Component {
  render () {
    return (
      <div className='container'>
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>

        <style jsx>{`
          .container {
            position: relative;
            width: 1920px;
            height: 1080px;
            margin: auto;
            background-image: url('/static/images/bg.png');
          }
        `}</style>

        <Link href='/'><a>bingo</a></Link>

        <List
          selected={this.props.selected}
          members={this.props.members}
        />
      </div>
    )
  }
}

ResultContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)
