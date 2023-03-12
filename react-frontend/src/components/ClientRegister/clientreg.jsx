import './clientreg.css'
import React, { useState } from 'react'
import Table from './Table'
// import { getAllBarbers } from '../../BackendRoutes/barber-routes'
import { addAppointment } from '../../BackendRoutes/appointment-routes'
import { getBarberByName, deleteBarberAvail} from '../../BackendRoutes/barber-routes'
import { Navbar } from '../navbar/navbar'
import { useLocation } from 'react-router-dom'
import {ConfirmDialog} from 'primereact/confirmdialog'
import { Button } from 'primereact/button'
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method

export default function ClientRegistration() {
  const [selectedAvail, setSelectedAvail] = useState({startTime: null,endTime: null, _id: null})
  const [appDate, setAppDate] = useState('')
  const [allDates, setAllDates] = useState([])
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [client, setClient] = useState({
    name: '',
    email: ''
  })

  const location = useLocation()
  const barber = location.state.popupInfo

  const scheduleAppointment = (index) => {
    console.log(client)
    const newAppoint = {startTime: selectedAvail.startTime, endTime: selectedAvail.endTime, _id: selectedAvail._id} 
    getBarberByName(barber.name).then((barberRes) => {
      console.log(barberRes)
      const appoint = {
        date: newAppoint,
        client: client,
        barber_id: barberRes.barber._id}
      console.log(appoint)
      // addAppointment(appoint).then((result) =>{
      //   if (result) {
      //     deleteBarberAvail(barberRes.barber.name, newAppoint)
      //   }
      // })
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

  function convertTime(date) {
    let time = new Date(date)
    let hrs = time.getHours()
    if (hrs === 0) hrs = 12
    let min = time.getMinutes()
    var post = 'AM'
    if (hrs >= 12) {
      post = 'PM'
    }
    if (hrs > 12) {
      hrs = hrs % 12
    }
    if (min < 10) return `${hrs}:0${min} ${post}`
    return `${hrs}:${min} ${post}`
  }

  function createMessage() {
    const barberInfo = "Your barber is " + barber.name + ".\n"
    const locationInfo = "Located at " + String(barber.lon) + " and " + String(barber.lat) + ".\n"
    const appointInfo = "Your appointment starts at " + convertTime(selectedAvail.startTime) + " and ends at " +  convertTime(selectedAvail.endTime) + ". Click \"Yes\" to confirm appointment."
    return (barberInfo + locationInfo + appointInfo)
  }

  function confirmation(index) {
    setSelectedAvail({startTime: allDates[index].startTime, endTime: allDates[index].endTime, _id: allDates[index]._id})
    if (client.name != "" && client.email != "") {
      setVisible(true)
    }
  }


  

  return (
    <div>
      <Navbar />
      <form id="schedule-appointment-form">
        <h2 class='sched_title'>Schedule Appointment</h2>
        <div>
          <label>Barber Name: {location.state.popupInfo.name}</label>
        </div>
        <div>
          <label>Name:</label>
          <input type="text"
                 id="clientName"
                 name="clientName"
                 value={client.name}
                 onChange={(e) => handleChange(e.target)} />
        </div>

        <div>
          <label>Email:</label>
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
      <h2>Availablity</h2>
      <Table class="Table" characterData={allDates} setVisible={confirmation}/>
      <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message={createMessage()} accept={scheduleAppointment}
          header="Appointment Confirmation" icon="pi pi-exclamation-triangle" />
    </div>
  )
}
