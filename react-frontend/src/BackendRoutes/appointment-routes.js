import axios from 'axios'

export default async function makeAppointmentPost(appointment) {
  try {
    const response = await axios.post('http://localhost:5000/appointments', appointment)
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}

export default async function AppointmentGet() {
  try {
    const response = await axios.get('http://localhost:5000/appointments')
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}