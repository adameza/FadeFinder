import axios from 'axios'

export default async function addClient(client) {
  try {
    const response = await axios.post('http://localhost:5000/clients', client)
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}
