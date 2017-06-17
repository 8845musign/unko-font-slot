export default ({ selected, member }) => {
  const item = (selectedMember) => {
    const m = member[selectedMember]
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
