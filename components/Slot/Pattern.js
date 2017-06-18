import PropTypes from 'prop-types'

const Pattern = ({ member }) => {
  return (
    <li>
      <style jsx>{`
        li {
          background: red;
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
