// Import the axios library for making HTTP requests. 
import axios from 'axios';

// Define a constant for the base URL of the API endpoints. 
const BASE_URL = 'https://localhost:8001/appointments';

// A function to handle errors and avoid reptitive code.
function handleError(error) {
  // Log the error to the console. 
  console.log(error);
  // Return false to indicate that an error occurred. 
  return false;
}

// Define an asynchronous function to add a new appointment.
export async function addAppointment(appointment) {
  try {
    // Send a POST request to the API with the appointment object as the request body. 
    const response = await axios.post(`${BASE_URL}`, appointment);
    // Return the response from the API. 
    return response;
  } catch (error) { 
    // Call handleError to the log error and return false. 
    return handleError(error);
  }
}

// Define an asynchronous function to get all appointments.
export async function getAppointments() {
  try {
    // Send a GET request to the API to retrieve all appointments. 
    const response = await axios.get(BASE_URL);
    // Return the response from the API.
    return response;
  } catch (error) {
    // Call handleError function to log the error and return false. 
    return handleError(error);
  }
}

// Define an asynchronous function to get appointments by day.
export async function getAppointmentsByDay(day) {
  try { 
    // Send a GET request to the API with the day parameter as part of the URL.
    const response = await axios.get(`${BASE_URL}/${day}`);
    // Return the times data from the API response. 
    return response.data.times;
  } catch (error) {
    // Call handleError function to log the error and return false. 
    return handleError(error);
  }
}

// import axios from 'axios'

// export async function addAppointment(appointment) {
//   try {
//     const response = await axios.post(
//       'http://localhost:8001/appointments',
//       appointment
//     )
//     return response
//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }

// export async function getAppointments() {
//   try {
//     const response = await axios.get('http://localhost:8001/appointments')
//     return response
//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }

// export async function getAppointmentsByDay(day) {
//   try {
//     const response = await axios.get(
//       'http://localhost:8001/appointments/'.concat(day)
//     )
//     return response.data.times
//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }
