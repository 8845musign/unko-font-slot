import PropTypes from 'prop-types'

import List from './result/List'

const ResultModal = ({ isShow, members, selected, hide }) => {
  if (!isShow) {
    return null
  }

  return (
    <div className='container'>
      <style jsx>{`
        .container {
          position: absolute;
          top: 0;
          left: 0;
          width: 1920px;
          height: 1080px;
        }

        .wrap {
          position: absolute;
          top: 0;
          left: calc(320px / 2);
          height: 1040px;
          width: 1500px;
          z-index: 101
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          background-color: rgba(0, 0, 0, .5)
        }
      `}</style>
      <div className='wrap'>
        <List
          members={members}
          selected={selected}
        />
      </div>
      <div className='overlay' onClick={hide} />
    </div>
  )
}

ResultModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  members: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  hide: PropTypes.func.isRequired
}

export default ResultModal
