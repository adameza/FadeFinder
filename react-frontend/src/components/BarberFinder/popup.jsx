import { React } from 'react'
import './popup.css'
// import pic from "./barber_pics/essa_barber.jpg"

export function BarberPopUp(props) {
    return(
        <div>
            <div class="header">
                <img class="barber_pic" src={require("./barber_pics/essa_barber.jpg")}/>
                <h3>{props.barber.name}</h3>
            </div>
            <p>Yo, I cut hair.</p>
            <button onClick={() => {props.reroute()}}>
              Schedule This Barber
            </button>
        </div>
    )
}