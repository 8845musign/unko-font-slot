import PropTypes from 'prop-types'

const List = ({ selected, members }) => {
  const item = (selectedMember) => {
    const m = members[selectedMember]
    return (
      <li key={m.id}>{m.name}</li>
    )
  }

  return (
    <ul>
      {selected.map(item)}
    </ul>
  )
}

List.propTypes = {
  selected: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired
}

export default List
