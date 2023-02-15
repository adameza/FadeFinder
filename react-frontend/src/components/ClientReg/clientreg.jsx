import './clientreg.css'
import React from 'react'

export default function ClientRegistration() {
  return (
    <body>
      <title>FadeFinder</title>
      <h1>FadeFinder</h1>
      <form id="schedule-appointment-form">
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
          <input type="date" id="appointment-date" name="appointment-date" />
        </div>
        <div>
          <label for="appointment-time"> Appointment Time:</label>
          <input type="time" id="appointment-time" name="appointment-time" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Appointments</h2>
      <table id="appointments">
        <thead>
          <tr>
            <th>Client Name</th>
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
