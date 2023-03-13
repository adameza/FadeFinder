import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../navbar/navbar'

import './barber-avail.css'
import Form from './Form'
import Table from './Table'
import {
  getBarberAvail,
  addBarberAvail,
  deleteBarberAvail,
} from '../../BackendRoutes/barber-routes'


export default function BarberAvailability() {
  const [allAvail, setAllAvail] = useState([])
  const location = useLocation()
  console.log(location)
  const barber = location.state

  useEffect(() => {
    getBarberAvail(barber.name).then((result) => {
      if (result) {
        setAllAvail(result)
      }
    })
  }, [])

  function updateList(avail) {
    addBarberAvail(barber.name, avail).then((result) => {
      if (result) {
        console.log(avail)
        setAllAvail(allAvail.concat(avail))
      }
    })
  }

  function removeOneCharacter(index) {
    console.log(allAvail[index])
    deleteBarberAvail(barber.name, allAvail[index]).then((result) => {
      if (result) {
        const updated = allAvail.filter((avail, i) => {
          return i !== index
        })
        console.log(updated)
        setAllAvail(updated)
      }
    })
  }

  return (
    <div>
      <div class='availability'>
        < Navbar class="navbar"/>
        <h2>Set Availability</h2>
        <Table characterData={allAvail} removeCharacter={removeOneCharacter} />
        <Form handleSubmit={updateList} />
      </div>
    </div>
  )
}
