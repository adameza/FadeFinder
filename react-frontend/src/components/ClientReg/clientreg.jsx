import './clientreg.css'
import React, { useState } from 'react'
import Table from './Table'
import { getAppointmentsByDay } from '../../BackendRoutes/appointment-routes'

export default function ClientRegistration() {
  const [appDate, setAppDate] = useState('')
  const [allDates, setAllDates] = useState([])

  const getDay = () => {
    var date = new Date(appDate)
    date.setDate(date.getDate() + 1)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const fetchAppointments = () => {
    let day = getDay()
    console.log(day)
    getAppointmentsByDay(day).then( result => {
      if (result) {
        console.log(result);
        setAllDates(result);
      }
    })
  }

  return (
    <div>
      <title>FadeFinder</title>
      <h1>FadeFinder</h1>
      <form id="schedule-appointment-form">
        <h2>Schedule Appointmnet</h2>
        <div>
          <label>Client Name:</label>
          <input type="text" id="client-name" name="client-name" />
        </div>
        <div>
          <label>Client Email:</label>
          <input type="email" id="client-email" name="client-email" />
        </div>
        <div>
          <label>Barber Name:</label>
          <select id="barber-name" name="barber-name">
            <option value="Jane Smith">Jane Smith</option>
            <option value="John Doe"> John Doe</option>
          </select>
        </div>
        <div>
          <label>Appointment Date:</label>
          <input type="date" 
                 id="appointment-date"
                 name="appointment-date"
                 onChange={(e) => setAppDate(e.target.valueAsDate)} />
        </div>
      </form>
      <button onClick={fetchAppointments}>Find Appointments</button>
      <h2>Appointments</h2>
      <Table characterData={allDates}/>
    </div>
  )
}
