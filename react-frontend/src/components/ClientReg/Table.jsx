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
      <TableBody characterData={props.characterData} />
    </table>
  )
}
export default Table
