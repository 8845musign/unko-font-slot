export default ({ selected, members }) => {
  const item = (selectedMember) => {
    const m = members[selectedMember]
    return (
      <li>{m.name}</li>
    )
  }

  return (
    <ul>
      {selected.map(item)}
    </ul>
  )
}
