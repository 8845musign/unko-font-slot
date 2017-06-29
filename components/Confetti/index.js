import PropTypes from 'prop-types'
import Tape from './Tape'

const renderTape = (tape, i) => {
  return <Tape key={i} tape={tape} />
}

const Confetti = ({ tapes }) => {
  return (
    <div className='container'>
      <style jsx>{`
        .container {
          position: absolute;
          top: 0;
          left: 0;
          width: 1920px;
          height: 1080px;
          pointer-events: none;
        }

        .container * {
          pointer-events: none;
        }
      `}</style>
      {tapes.map(renderTape)}
    </div>
  )
}

Confetti.propTypes = {
  tapes: PropTypes.array.isRequired
}

export default Confetti
