import './App.css'
import CustomerLogin from './components/Customer-Login/customer-login'
import CustomerNew from './components/Customer-Login/customer-new'
import BarberLogin from './components/Barber-Login/barber-login'
import BarberSelect from './components/BarberSelect/barberselect'
import BarberAvailability from './components/Barber-Avail/barber-avail'
import BarberFinder from './components/BarberFinder/barberfinder'
import ClientRegistration from './components/ClientReg/clientreg'
import BarberFinder from './components/BarberFinder/barberfinder'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/customerlogin" element={<CustomerLogin />} />
            <Route path="/customerlogin/new" element={<CustomerNew />} />
            <Route path="/barberlogin" element={<BarberLogin />} />
            <Route path="/barberselect" element={<BarberSelect />} />
            <Route path="/clientreg" element={<ClientRegistration />} />
            <Route path="/barberavail" element={<BarberAvailability />} />
            <Route path="/barberfinder" element={<BarberFinder />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
