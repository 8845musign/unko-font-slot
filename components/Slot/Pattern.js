import PropTypes from 'prop-types'

const Pattern = ({ member }) => {
  return (
    <li>
      <style jsx>{`
        li {
          width: 750px;
          height: 750px;
        }

        img {
          width: 750px;
          height: 750px;
        }
      `}</style>

      <img src={member.image} alt={member.name} />
    </li>
  )
}

Pattern.propTypes = {
  member: PropTypes.object.isRequired
}

export default Pattern
