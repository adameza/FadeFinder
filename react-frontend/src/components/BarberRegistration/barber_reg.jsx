import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../navbar/navbar'
import { useLocation } from 'react-router-dom'
import Geocode from "react-geocode";
import { addBarber } from '../../BackendRoutes/barber-routes';
import './barber_reg.css'

Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey("AIzaSyB2JzmC2-zlf3SiXHPcioUHMfDeOcsIXpU");
Geocode.enableDebug();

export default function BarberRegistration() {
  const [pinBio, setPinBio] = useState("")
  const [imPath, setImPath] = useState("")
  const [badAddr, setBadAddr] = useState(false)
  const [address, setAddress] = useState("Old Slo BBQ, San Luis Obispo")
  const [lati, setLat] = useState(0)
  const [long, setLon] = useState(0)
  const location = useLocation()
  const user = location.state.oAuthRes
  const navigate = useNavigate()

  function geolocate() {
    const myAddr = address
    console.log(myAddr)
    Geocode.fromAddress(myAddr).then(
      (response) => {
        const geolat = response.results[0].geometry.location.lat;
        const geolng = response.results[0].geometry.location.lng;
        setLat(geolat)
        setLon(geolng)
        console.log({lati, long})
        setBadAddr(false)
        return true
      },
      (error) => {
        console.error(error);
        setBadAddr(true)
        return false
      }
    );
  }

  function submit() {
    geolocate()
    if (!badAddr && imPath.length !== 0 && pinBio.length !== 0) {
      const newName = String(user.name)
      const newEmail = String(user.email)
      const Barber = {name: newName,
                      email: newEmail,
                      bio: pinBio,
                      imgPath: imPath,
                      availability: [],
                      appointments: [],
                      lat: lati,
                      lon: long,
                      }
      console.log(Barber)
      addBarber(Barber).then((res) => {
        console.log(res)
        navigate('/barber/dashboard', { state: { Barber } })
      }).catch((error) => {
        console.log(error)
      })
    }
    else {
      console.log("bad")
    }
  }

  return (
    <main>
      <Navbar />
      <div class="registration">
        <div class="head">
        <h2 className="login_title">Account Creation</h2>
        <label htmlFor="fullname">Name: {user.name}</label>
        <label htmlFor="email">Email: {user.email}</label>
        </div>
        <div class="location">
          <label id="location_label">Location</label>
          <input type="textarea" 
          name="location_input"
          onChange={(e) => {setAddress(e.target.value)}}
          />
          {badAddr && <p class="error">Enter a valid address</p>}
        </div>
        <div class="pinbio">
          <label id="pinbio_label">Pin Bio (shows on map)</label>
          <input type="textarea" 
          name="pinbio_input"
          maxLength="150"
          onChange={(e) => {setPinBio(e.target.value)}}
          />
        </div>
        {pinBio.length === 0 && <p class="error">Enter a bio</p>}
        <div class="impath">
          <label id="impath_label">Path to profile pic</label>
          <input type="textarea" 
          name="impath_input"
          onChange={(e) => {setImPath(e.target.value)}}
          />
        </div>
        {imPath.length === 0 && <p class="error">Enter a path</p>}
        <button className="regButton" onClick={submit}>Create Account</button>
        </div>
    </main>
  )
}
