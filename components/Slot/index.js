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
      <ul>
        {pattern.map(item)}
      </ul>
    </div>
  )
}

Slot.propTypes = {
  pattern: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired
}

export default Slot
