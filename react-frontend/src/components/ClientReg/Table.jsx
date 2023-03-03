import React from 'react'

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Appointment Time</th>
      </tr>
    </thead>
  )
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          {row.startTime} {row.endTime}
          <div>
            <button onClick={() => props.schedule(index)}>Schedule</button>
          </div>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} schedule={props.schedule}/>
    </table>
  )
}
export default Table
