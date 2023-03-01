import './clientreg.css'
import React, { useState } from 'react'
import Table from './Table'
import { getAllBarbers } from '../../BackendRoutes/barber-routes'
import { useLocation } from 'react-router-dom'

export default function ClientRegistration() {
  const [appDate, setAppDate] = useState('')
  const [allDates, setAllDates] = useState([])

  const location = useLocation()

  const getDay = () => {
    var date = new Date(appDate)
    date.setDate(date.getDate() + 1)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const fetchAppointments = () => {
    let day = getDay()
    console.log(day)
    getAllBarbers(day).then((result) => {
      if (result) {
        console.log(result)
        setAllDates(result)
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
          <label>Barber Name: {location.state.popupInfo.name}</label>
        </div>
        <div>
          <label>Client Name:</label>
          <input type="text" id="client-name" name="client-name" />
        </div>

        <div>
          <label>Client Email:</label>
          <input type="email" id="client-email" name="client-email" />
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            id="appointment-date"
            name="appointment-date"
            onChange={(e) => setAppDate(e.target.valueAsDate)}
          />
        </div>
      </form>
      <button onClick={fetchAppointments}>Find Appointments</button>
      <h2>Appointments</h2>
      <Table characterData={allDates} />
    </div>
  )
}
