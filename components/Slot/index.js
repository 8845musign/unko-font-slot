import PropTypes from 'prop-types'

import Pattern from './Pattern'

// For loop, copy first member to last.
const createLoopPattern = (pattern) => {
  if (pattern.length === 0) return pattern

  const first = pattern[0]

  return [...pattern, first]
}

const Slot = ({ pattern, members, reelTop }) => {
  const item = (id, i) => {
    const m = members[id]
    return (
      <Pattern member={m} key={i} />
    )
  }

  const loopPattern = createLoopPattern(pattern)

  const reelStyle = {
    top: reelTop
  }

  return (
    <div className='frame'>
      <style jsx>{`
        .frame {
          position: relative;
          width: 100px;
          height: 100px;
          overflow: hidden;
        }

        ul {
          position: absolute;
          top: 0;
          left: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
      <ul style={reelStyle}>
        {loopPattern.map(item)}
      </ul>
    </div>
  )
}

Slot.propTypes = {
  pattern: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired,
  reelTop: PropTypes.number.isRequired
}

export default Slot
