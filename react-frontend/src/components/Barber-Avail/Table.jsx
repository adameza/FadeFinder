import React from 'react'

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Day</th>
        <th>Start Time</th>
        <th>End Time</th>
      </tr>
    </thead>
  )
}

function convertTime(date) {
  let time = new Date(date)
  let hrs = time.getHours()
  let min = time.getMinutes()
  var post = 'AM'
  if (hrs > 12) post = 'PM'
  hrs = hrs % 12
  if (min < 10) return `${hrs}:0${min} ${post}`
  return `${hrs}:${min} ${post}`
}

const getDay = (appDate) => {
  var date = new Date(appDate)
  return date.getDate().toString()
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    console.log(row)
    const day = getDay(row.startTime)
    const start = convertTime(row.startTime)
    const end = convertTime(row.endTime)
    return (
      <tr key={index}>
        <td>{day}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
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
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  )
}
export default Table
