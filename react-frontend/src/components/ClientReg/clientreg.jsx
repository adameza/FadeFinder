import './clientreg.css'
import React, { useState } from 'react'

export default function ClientRegistration() {
  const [appDate, setAppDate] = useState('')

  const getDay = () => {
    var date = new Date(appDate)
    date.setDate(date.getDate() + 1)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const fetchAppointments = (d) => {
      d.preventDefault()
      let day = getDay()
      console.log({ day })
  }

  // console.log({ appDate })
  return (
    <body>
      <title>FadeFinder</title>
      <h1>FadeFinder</h1>
      <form id="schedule-appointment-form" onSubmit={fetchAppointments}>
        <h2>Schedule Appointmnet</h2>
        <div>
          <label for="client-name">Client Name:</label>
          <input type="text" id="client-name" name="client-name" />
        </div>
        <div>
          <label for="client-email">Client Email:</label>
          <input type="email" id="client-email" name="client-email" />
        </div>
        <div>
          <label for="barber-name">Barber Name:</label>
          <select id="barber-name" name="barber-name">
            <option value="Jane Smith">Jane Smith</option>
            <option value="John Doe"> John Doe</option>
          </select>
        </div>
        <div>
          <label for="appointment-date">Appointment Date:</label>
          <input type="date" 
                 id="appointment-date"
                 name="appointment-date"
                 onChange={(e) => setAppDate(e.target.valueAsDate)} />
        </div>
        <button>Find Appointments</button>
      </form>

      <h2>Appointments</h2>
      <table id="appointments">
        <thead>
          <tr>
            <th>Barber Name</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </body>
  )
}
