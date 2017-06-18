import PropTypes from 'prop-types'

import Pattern from './Pattern'

const Slot = ({ pattern, members }) => {
  const item = (id) => {
    const m = members[id]
    return (
      <Pattern member={m} key={id} />
    )
  }

  return (
    <ul>
      {pattern.map(item)}
    </ul>
  )
}

Slot.propTypes = {
  pattern: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired
}

export default Slot
