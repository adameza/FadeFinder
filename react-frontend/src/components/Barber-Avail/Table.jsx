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
  if (hrs > 12) var post = 'PM'
  else var post = 'AM'
  hrs = hrs % 12
  if (min < 10) return `${hrs}:0${min} ${post}`
  return `${hrs}:${min} ${post}`
}

const getDay = (appDate) => {
  var date = new Date(appDate)
  date.setDate(date.getDate() + 1)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
  return days[date.getDay()]
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
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
