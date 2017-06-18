import PropTypes from 'prop-types'

const Pattern = ({ member }) => {
  return (
    <li>
      <style jsx>{`
        li {
          width: 100px;
          height: 100px;
          background-color: red;
        }
      `}</style>
      {member.name}
    </li>
  )
}

Pattern.propTypes = {
  member: PropTypes.object.isRequired
}

export default Pattern
