import { Component } from 'react'
import { connect } from 'react-redux'

import Link from 'next/link'

class indexContainer extends Component {
  render () {
    return (
      <div>
        <Link href="result"><a>result</a></Link>
        <p>{
          this.props.selected ? this.props.selected.name : 'press next button'
        }</p>

        <button>next</button>
      </div>
    )
  }
}

export default connect()(indexContainer)
