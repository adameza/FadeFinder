/* 
    This code is a module that exports a set of functions for interacting with a barber 
    management system API. The module uses the Axios library for making HTTP requests and 
    provides a consistent interface to interact with the API's endpoints. The exported 
    functions perform various tasks such as adding, updating, and retrieving barbers and 
    their availability, as well as handling appointments.

    Here is an analytical breakdown of the code. 
*/

/*
    1.) Imports and Constants: The code imports the Axios library, which is used for making 
        HTTP requests. It also defines a constant BASE_URL for the base API URL, which will 
        be used for constructing the complete API endpoints for each function.
*/
// Import the axios library for making HTTP requests.
import axios from "axios";

// Define a constant for the base URL of the API endpoints. 
const BASE_URL = 'http://localhost:8001/barbers';

/* 
    2.) addBarber: This asynchronous function adds a new barber to the system. It takes a 
        barber object as an argument and sends a POST request to the API, passing the barber 
        object as the request body. If successful, it returns the API response; otherwise, 
        it returns the error response.
*/
// Define an asynchronous function to add a new barber to the system.
export async function addBarber(barber) {
  try {
    // Send a POST request to the API with the barber object as the request body.
    const response = await axios.post(`${BASE_URL}`, barber);
    // Return the response from the API.
    return response;
  } catch (error) {
    // Log the error to the console. 
    console.log(error);
    // Return the error response object.
    return error.response;
  }
}

/*
    3.) addBarberAvail: This asynchronous function adds availability for a specific barber. 
        It takes the barber's name and a list of availability as arguments and sends a POST 
        request to the API, passing the availability list as the request body. If 
        successful, it returns the API response; otherwise, it returns the error response.
*/
// Define an asynchronous function to add availability for a specific barber. 
export async function addBarberAvail(barberName, avail_list) {
  try {
    // Send a POST request to the API with the availability list as the request body. 
    const response = await axios.post(`${BASE_URL}/${barberName}/avail`, avail_list);
    // Return the response from the API. 
    return response;
  } catch (error) {
    // Log the error to the console. 
    console.log(error);
    // Return the error response object. 
    return error.response;
  }
}

/*
    4.) deleteBarberAvail: This asynchronous function deletes availability for a specific 
        barber. It takes the barber's name and an availability object as arguments and 
        sends a DELETE request to the API, passing the availability object as the request 
        data. If successful, it returns the API response; otherwise, it returns the error 
        response.
*/
// Define an asynchronous function to delete availability for a specific barber.
export async function deleteBarberAvail(barberName, avail) {
  try {
    // Send a DELETE request to the API with the availability object as the request data. 
    const response = await axios.delete(`${BASE_URL}/${barberName}/avail`, { data: avail});
    // Return the response from the API.
    return response;
  } catch (error) {
    // Log the error to the console.
    console.log(error);
    // Return the error response object.
    return error.response;
  }
}

/*
    5.) getBarberAvail: This asynchronous function retrieves the availability for a specific 
        barber. It takes the barber's name as an argument and sends a GET request to the API. 
        If successful, it returns the availability data from the barber object; otherwise, 
        it returns the error response.
*/
// Define an asynchronous function to get availability for a specific barber.
export async function getBarberAvail(barberName) {
  try {
    // Send a GET request to the API to retrieve the barber data.
    const response = await axios.get(`${BASE_URL}/${barberName}`);
    // Return the availability data from the barber object.
    return response.data.barber.availability; 
  } catch (error) {
    // Log the error to the console.
    console.log(error);
    // Return the error response object.
    return error.response;
  }
}

/* 
    6.) getAllBarbers: This asynchronous function retrieves all barbers in the system. It 
        sends a GET request to the API and returns the data from the API response if 
        successful; otherwise, it returns the error response.
*/
// Define an asynchronous function to get all barbers in the system. 
export async function getAllBarbers() {
  try { 
    // Send a GET request to the API to retrieve all barbers.
    const response = await axios.get(BASE_URL);
    // Return the data from the API response.
    return response.data;
  } catch (error) {
    // Log the error to the console.
    console.log(error);
    // Return the error response object. 
    return error.response;
  }
}

/*
    7.) getBarberByName: This asynchronous function retrieves a barber by name. It takes the 
        barber's name as an argument and sends a GET request to the API, passing the barber's 
        name as a query parameter. If successful, it returns the data from the API response; 
        otherwise, it returns the error response.
*/
// Define an asynchronous function to get a barber by name.
export async function getBarberByName(barberName) {
  try {
    // Send a GET request to the API with the barber's name as a query parameter. 
    const response = await axios.get(`${BASE_URL}/name`, { params: { name: barberName } });
    // Return the data from the API response.
    return response.data;
  } catch (error) {
    // Log the error response to the console.
    console.log(error.response);
    // Return the error response object.
    return error.response;
  }
}

/*
    8.) getBarberAppointments: This asynchronous function retrieves appointments for a 
        specific barber. It takes the barber's name as an argument and sends a GET request 
        to the API. If successful, it returns the data from the API response; otherwise, it 
        returns the error response.
*/
// Define an asychronous function to get appointments for a specific barber. 
export async function getBarberAppointments(barberName) {
  try {
    // Send a GET request to the API to retrieve the appointments for the given barber. 
    const response = await axios.get(`${BASE_URL}/${barberName}/appointments`);
    // Return the data from the API response.
    return response.data;
  } catch (error) {
    // Log the error response to the console. 
    console.log(error.response);
    // Return the error response object. 
    return error.response;
  }
}

/*
    9.) getBarberByNameAndEmail: This asynchronous function retrieves a barber by name and 
        email. It takes a barber object containing the name and email as an argument and 
        sends a GET request to the API, passing the barber's name and email as part of the 
        URL. If successful, it returns the data from the API response; otherwise, it returns 
        the error response.
*/
// Define an asynchronous function to get a barber by name and email.
export async function getBarberByNameAndEmail(barber) {
  try {
    // Send a GET request to the API with the barber's name and email as part of the URL.
    const response = await axios.get(`${BASE_URL}/nameandemail/${barber.name}/${barber.email}`);
    // Return the data from the API response. 
    return response.data;
  } catch (error) {
    // Log the error response to the console. 
    console.log(error.response);
    // Return the error response object. 
    return error.response;
  }
}

/*
    10.) updateBarber: This asynchronous function updates a barber's information. It takes 
         an updated barber object as an argument and sends a PATCH request to the API, 
         passing the updated barber object as the request body. If successful, it returns 
         the API response; otherwise, it returns the error response.
*/
// Define an asynchronous function to update a barber's information. 
export async function updateBarber(updatedBarber) {
  try {
    // Send a PATCH request to the API with the updated barber object as the request body. 
    const response = await axios.patch(BASE_URL, updatedBarber);
    // Return the response from the API.
    return response;
  } catch (error) {
    // Log the error to the console. 
    console.log(error);
    // Return the error response object.
    return error.response;
  }
}

/*
    11.) addBarberAppoint: This asynchronous function adds an appointment for a specific 
         barber. It takes the barber's name and an appointment object as arguments and 
         sends a POST request to the API, passing the appointment object as the request
         body. If successful, it returns the API response; otherwise, it returns the error
         response.
*/
// Define an asychronous function to add an appointment for a specific barber. 
export async function addBarberAppoint(barberName, appointment) {
  try {
    // Send a POST request to the API with the appointment object as the request body. 
    const response = await axios.post(`${BASE_URL}/${barberName}/appointments`, appointment);
    // Return the response from the API.
    return response;
  } catch (error) {
    // Log the error to the console. 
    console.log(error);
    // Return the error response object. 
    return error.response;
  }
}
