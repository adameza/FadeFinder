import './App.css'
import React, { useState, useEffect } from 'react';
import BarberPole from './components/Home/loading';
import './components/Home/startupScreenText.css'; // import the CSS file for the startup animation styles

import Loading from './components/Home/loading'
import CustomerLogin from './components/Customer-Login/customer-login'
import CustomerNew from './components/Customer-Login/customer-new'
import BarberLogin from './components/Barber-Login/barber-login'
import BarberSelect from './components/BarberSelect/barberselect'
import BarberAvailability from './components/Barber-Avail/barber-avail'
import ClientRegistration from './components/ClientReg/clientreg'
import BarberFinder from './components/BarberFinder/barberfinder'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [isStartingUp, setIsStartingUp] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsStartingUp(false)
    }, 3000) // hide the animation after 3 seconds
  }, [])
  return (
    <div className="App">
      {isStartingUp && <BarberPole />}
      <div className="loading-screen">
        <h1 className="loading-screen__logo">FadeFinder</h1>
      </div>
      <header className="App-header">
        
        <BrowserRouter>
          <Routes>
            <Route path="/loading" element={<Loading />} />
            <Route path="/customerlogin" element={<CustomerLogin />} />
            <Route path="/customerlogin/new" element={<CustomerNew />} />
            <Route path="/barberlogin" element={<BarberLogin />} />
            <Route path="/barberselect" element={<BarberSelect />} />
            <Route path="/clientreg" element={<ClientRegistration />} />
            <Route path="/barberavail" element={<BarberAvailability />} />
            <Route path="/" element={<BarberFinder />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
