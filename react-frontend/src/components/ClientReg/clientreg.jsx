import './clientreg.css'
import React, { useState } from 'react'
import Table from './Table'
// import { getAllBarbers } from '../../BackendRoutes/barber-routes'
import addClient from '../../BackendRoutes/client-routes'
import { useLocation } from 'react-router-dom'

export default function ClientRegistration() {
  const [appDate, setAppDate] = useState('')
  const [allDates, setAllDates] = useState([])
  const [client, setClient] = useState({
    name: '',
    email: ''
  })

  const location = useLocation()
  const barber = location.state.popupInfo

  const scheduleAppointment = (index) => {
    const client_id = addClient(client)
    const appoint = {date: appDate,
                     client: }
  }

  const getDay = () => {
    var date = new Date(appDate)
    date.setDate(date.getDate() + 1)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const fetchAppointments = () => {
    let dayName = getDay()
    console.log(dayName)
    const dates = barber.availability.filter((avail) => {
      return avail.day === dayName
    })
    console.log(dates)
    setAllDates(dates)
  }

  function handleChange(event) {
    const clientName = event.clientName
    const clientEmail = event.clientEmail
    if (day) {
      setAvail({
        day: day,
        startTime: avail['startTime'],
        endTime: avail['endTime'],
      })
    } else if (start) {
      setAvail({
        day: avail['day'],
        startTime: convertTime(start),
        endTime: avail['endTime'],
      })
    } else if (end) {
      setAvail({
        day: avail['day'],
        startTime: avail['startTime'],
        endTime: convertTime(end),
      })
    }
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
          <input type="text"
                 id="clientName"
                 name="clientName"
                 value={client.name}
                 onChange={handleChange} />
        </div>

        <div>
          <label>Client Email:</label>
          <input type="email"
                 id="clientEmail"
                name="clientEmail"
                value={client.email}
                onChange={handleChange}
                />
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
      <Table characterData={allDates} schedule={scheduleAppointment}/>
    </div>
  )
}
