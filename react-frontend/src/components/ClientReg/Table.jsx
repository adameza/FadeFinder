import React from 'react'

function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>Barber Name</th>
        <th>Appointment Time</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.time.startTime} {row.time.endTime}</td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}

function Table (props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} />
    </table>
  );
}
export default Table;