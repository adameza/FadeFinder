import { React , useState , useEffect } from "react";
import "./barber-avail.css"
import Form from "./Form"
import Table from "./Table"
import { getBarberAvailability , addBarberAvail } from "../../BackendRoutes/barber-routes";

export default function BarberAvailability() {

  const [allAvail, setAllAvail] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search)
  const barberName = queryParameters.get("name")

  useEffect(() => {
    getBarberAvailability(barberName).then( result => {
        if (result) {
          setAllAvail(result);
          console.log(result)
          console.log("good")
        }
    });
  }, [] );

  function updateList(avail) { 
    addBarberAvail(barberName, avail).then( result => {
      if (result) {
        console.log(avail)
        setAllAvail([...allAvail, avail] );
      }
    })
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
