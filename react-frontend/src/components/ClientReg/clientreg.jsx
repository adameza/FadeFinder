import './clientreg.css'
import React, { useState } from 'react'
import Table from './Table'
// import { getAllBarbers } from '../../BackendRoutes/barber-routes'
import { addAppointment } from '../../BackendRoutes/appointment-routes'
import { getBarberByName } from '../../BackendRoutes/barber-routes'

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
    console.log(client)
    getBarberByName(barber.name).then((barberRes) => {
      console.log(barberRes)
      const appoint = {date: appDate,
        client: client,
        barber: barberRes.barber._id}
      console.log(appoint)
      addAppointment(appoint)
    })

  }

  const fetchAppointments = (selectedDate) => {
    setAppDate(selectedDate)
    console.log(barber.availability)
    const dates = barber.availability.filter((avail) => {
      let tempDate = new Date(avail.startTime)
      console.log("barber" + tempDate.getDate().toString())
      console.log("selected" + selectedDate.getDate().toString())
      return tempDate.getDate() === selectedDate.getDate() + 1
    })
    console.log(dates)
    setAllDates(dates)
  }

  function handleChange(event) {
    console.log(event)
    console.log(event.value)
    if (event.id === "clientName") {
      setClient({
        name: event.value,
        email: client['email']
      })
    } else if (event.id === "clientEmail") {
      setClient({
        name: client['name'],
        email: event.value
      })
    }
  }

  return (
    <div>
      <title>FadeFinder</title>
      <h1>FadeFinder</h1>

      <form id="schedule-appointment-form">
        <h2>Schedule Appointment</h2>
        <div>
          <label>Barber Name: {location.state.popupInfo.name}</label>
        </div>
        <div>
          <label>Client Name:</label>
          <input type="text"
                 id="clientName"
                 name="clientName"
                 value={client.name}
                 onChange={(e) => handleChange(e.target)} />
        </div>

        <div>
          <label>Client Email:</label>
          <input type="email"
                 id="clientEmail"
                name="clientEmail"
                value={client.email}
                onChange={(e) => handleChange(e.target)}
                />
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            id="appointment-date"
            name="appointment-date"
            onChange={(e) => fetchAppointments(e.target.valueAsDate)}
          />
        </div>
      </form>
      <h2>Appointments</h2>
      <Table characterData={allDates} schedule={scheduleAppointment}/>
    </div>
  )
}
