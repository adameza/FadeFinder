import { React } from 'react'
import './popup.css'
// import pic from "./barber_pics/essa_barber.jpg"
const baseurl = "./barber_pics/"

export function BarberPopUp(props) {
    return(
        <div>
            <div class="header">
                <img class="barber_pic" src={require(`${ baseurl + props.barber.imgPath }`)}/>
                <h3>{props.barber.name}</h3>
            </div>
            <p>{props.barber.bio}</p>
            <button onClick={() => {props.reroute()}}>
              Schedule This Barber
            </button>
        </div>
    )
}