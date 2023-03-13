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
  const barber = location.state.barberRes.barber

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
        setAllAvail(result)
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
      < Navbar class="navbar"/>
      <Table characterData={allAvail} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )
}
