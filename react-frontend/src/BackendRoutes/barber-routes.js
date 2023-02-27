import axios from 'axios'

export default async function makeBarberPost(barber) {
  try {
    const response = await axios.post('http://localhost:5000/barber', barber)
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}
