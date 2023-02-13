import './App.css';
import CustomerLogin from "./components/Customer-Login/customer-login"
import BarberLogin from "./components/Barber-Login/barber-login"
import BarberSelect from './components/BarberSelect/barberselect';
import { BrowserRouter, Route , Routes} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>

          <Routes>
            <Route path="/customerlogin" element={<CustomerLogin />} />
            <Route path="/barberlogin" element={<BarberLogin />} />
            <Route path="/barberselect" element={<BarberSelect />} />
          </Routes>

        </ BrowserRouter>

      </header>
    </div>
  );
}

export default App;
