import PropTypes from 'prop-types'

const List = ({ selected, members }) => {
  const item = (selectedMember) => {
    const m = members[selectedMember]
    return (
      <li key={m.id}>
        <style jsx>{`
          li {
            width: 20%;
            padding: 0 12px;
            margin-bottom: 20px;
            float: left;
          }

          .item {
            position: relative;
            overflow: hidden;
            border-radius: 5px;
          }

          .item img {
            width: 100%;
            height: auto;
            vertical-align: bottom;
          }

          figure {
            width: 100%;
          }

          figcaption {
            position: absolute;
            width: 100%;
            height: 56px;
            bottom: 0;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.25);
            line-height: 56px;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        `}</style>

        <figure className='item'>
          <img src={m.image} alt={m.name} />
          <figcaption title={m.name}>{m.name}</figcaption>
        </figure>
      </li>
    )
  }

  return (
    <ul>
      <style jsx>{`
        ul {
          margin: 0 auto 0;
          padding: 40px 0 0;
          list-style: none;
          width: 1500px;
          overflow-y: auto;
          height: calc(1080px - 40px);
        }
      `}</style>
      {selected.map(item)}
    </ul>
  )
}

List.propTypes = {
  selected: PropTypes.array.isRequired,
  members: PropTypes.object.isRequired
}

export default List
