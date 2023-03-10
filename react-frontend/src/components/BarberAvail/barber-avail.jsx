import { React, useState, useEffect } from 'react'
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
  const queryParameters = new URLSearchParams(window.location.search)
  const barberName = queryParameters.get('name')

  useEffect(() => {
    getBarberAvail(barberName).then((result) => {
      if (result) {
        setAllAvail(result)
      }
    })
  }, [])

  function updateList(avail) {
    addBarberAvail(barberName, avail).then((result) => {
      if (result) {
        console.log(avail)
        setAllAvail([...allAvail, avail])
      }
    })
  }

  function removeOneCharacter(index) {
    console.log(allAvail[index])
    deleteBarberAvail(barberName, allAvail[index]).then((result) => {
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
      <Table characterData={allAvail} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )
}
