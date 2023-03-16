// Import the axios library for making HTTP requests. 
import axios, { AxiosError } from 'axios'

// Define a constant for the base URL of the API endpoints.
const BASE_URL = 'http://localhost:8001/clients';

// A function to handle errors and avoid reptitive code. 
function handleError(error) {
  // Log the error to the console. 
  console.log(error);
  // Return false to indicate that an error occurred. 
  return false;
}

// Define an asynchronous function to add a new client. 
export async function addClient(client) {
  try {
    // Send a POST requet to the API with the client. 
    const response = await axios.post(BASE_URL, client);
    // Return the data from the API response. 
    return response.data;
  } catch (error) {
    // Call handleError function to log the error and return false. 
    return handleError(error);
  }
}

