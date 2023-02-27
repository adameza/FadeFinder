import { React , useState } from "react";
import "./barber-avail.css"
import Form from "./Form"
import Table from "./Table"

// import moment from 'moment';

export default function BarberAvailability() {

  const options = [
    { value: 'barber_id', label: 'Sun' },
    { value: 'barber_id', label: 'Mon' },
    { value: 'barber0_id', label: 'Tue' },
    { value: 'barber1_id', label: 'Wed' },
    { value: 'barber1_id', label: 'Thu' },
    { value: 'barber1_id', label: 'Fri' },
    { value: 'barber1_id', label: 'Sat' }
  ]

  const [allAvail, setAllAvail] = useState([]);


  function updateList(avail) { 
    console.log(avail)
    setAllAvail([...allAvail, avail] );
  }

  function removeOneCharacter (index) {
    const updated = allAvail.filter((avail, i) => {
        return i !== index
      });
      setAllAvail(updated);
    }
  

  return (
    <div>
      <Table characterData={allAvail} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList}/>
    </div>
  )
}
