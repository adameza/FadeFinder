import axios from 'axios'

export async function addBarber(barber) {
  try {
    const response = await axios.post('http://localhost:5000/barbers', barber)
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function addBarberAvail(barberName, avail_list) {
  try {
    const response = await axios.post(
      'http://localhost:5000/barbers/'.concat(barberName + '/avail'),
      avail_list
    )
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function deleteBarberAvail(barberName, avail) {
  try {
    const response = await axios.delete(
      'http://localhost:5000/barbers/'.concat(barberName + '/avail'),
      { data: avail }
    )
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getBarberAvail(barberName) {
  try {
    const response = await axios.get(
      'http://localhost:5000/barbers/'.concat(barberName)
    )
    return response.data.barber.availability
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getAllBarbers() {
  try {
    const response = await axios.get('http://localhost:5000/barbers')
    return response.data
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getBarberByName(barberName) {
  try {
    const response = await axios.get('http://localhost:5000/barbers/'.concat(barberName))
    return response.data
  } catch (error) {
    console.log(error)
    return false
  }
}