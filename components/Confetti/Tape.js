import PropTypes from 'prop-types'

const Tape = ({ tape }) => {
  const style = {
    left: tape.x,
    top: tape.y
  }

  return (
    <div className='tape' style={style}>
      <style jsx>{`
        .tape {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #FFF;
        }
      `}</style>
    </div>
  )
}

Tape.propTypes = {
  tape: PropTypes.object.isRequired
}

export default Tape
