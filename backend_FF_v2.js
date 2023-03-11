class BarberFinder {
  constructor() {
    this.barberLocations = [
      { name: 'Barber 1', lat: 37.7749, lng: -122.4194 },
      { name: 'Barber 2', lat: 40.7128, lng: -74.006 },
      { name: 'Barber 3', lat: 51.5074, lng: -0.1278 },
    ]
  }

  getClientLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const clientLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      console.log('Client location: ', clientLocation)
      this.findNearestBarber(clientLocation)
    })
  }

  findNearestBarber(clientLocation) {
    let nearestBarber
    let minDistance = Infinity
    this.barberLocations.forEach((barberLocation) => {
      const distance = this.getDistance(clientLocation, barberLocation)
      if (distance < minDistance) {
        minDistance = distance
        nearestBarber = barberLocation
      }
    })

    console.log('Nearest barber: ', nearestBarber)
  }

  getDistance(location1, location2) {
    const lat1 = location1.lat
    const lat2 = location2.lat
    const lng1 = location1.lng
    const lng2 = location2.lng
    const earthRadius = 6371 // km
    const latDiff = (lat2 - lat1) * (Math.PI / 180)
    const lngDiff = (lng2 - lng1) * (Math.PI / 180)
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(lngDiff / 2) *
        Math.sin(lngDiff / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = earthRadius * c
    return distance
  }
}

class Barber {
  constructor(name) {
    this.name = name
  }
}

class Appointment {
  constructor(client, barber, date, time) {
    this.client = client
    this.barber = barber
    this.date = date
    this.time = time
  }
}

class Client {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.preferredAppointments = []
  }

  addPreferredAppointment(appointment) {
    this.preferredAppointments.push(appointment)
  }
}

class FadeFinder {
  constructor() {
    this.appointments = []
    this.waitingList = []
    this.clients = []
  }

  addAppointment(appointment) {
    if (this.appointments.length >= 10) {
      this.waitingList.push(appointment)
    } else {
      this.appointments.push(appointment)
    }
  }

  cancelAppointment(appointment) {
    const index = this.appointments.indexOf(appointment)

    if (index === -1) {
      return
    }

    this.appointments.splice(index, 1)

    if (this.waitingList.length > 0) {
      this.appointments.push(this.waitingList.shift())
    }
  }

  displayAppointments(tableBody, appointments = this.appointments) {
    tableBody.innerHTML = ''
    appointments.forEach((appointment, index) => {
      const row = document.createElement('tr')
      row.innerHTML = `<td>${appointment.client.name}</td> <td>${appointment.barber.name}</td> <td>${appointment.date}</td> <td>${appointment.time}</td> <td> <button class="edit-btn">Edit</button> <button class="cancel-btn">Cancel</button> </td>`
      const editButton = row.querySelector('.edit-btn')
      editButton.setAttribute('data-index', index)
      const cancelButton = row.querySelector('.cancel-btn')
      cancelButton.setAttribute('data-index', index)
      tableBody.appendChild(row)
    })
  }

  filterAppointmentsByDate(date) {
    return this.appointments.filter((appointment) => appointment.date === date)
  }

  editAppointment(appointment, row) {
    // Get the input elements for the appointment date and time
    const dateInput = row.querySelector('.appointment-date-input')
    const timeInput = row.querySelector('.appointment-time-input')

    // Get the current appointment date and time
    const currentDate = appointment.date
    const currentTime = appointment.time

    // Check if the date input exists
    if (dateInput) {
      // Update the appointment date with the value from the input
      appointment.date = dateInput.value
    }

    // Check if the time input exists
    if (timeInput) {
      // Update the appointment time with the value from the input
      appointment.time = timeInput.value
    }

    // Check if the appointment date or time has changed
    if (currentDate !== appointment.date || currentTime !== appointment.time) {
      // Send a notification to the client about the change
      sendNotification(
        appointment.client.email,
        `Your appointment on ${appointment.date} at ${appointment.time} has been changed.`
      )
    }
  }
}

const fadeFinder = new FadeFinder()

// Get the table body element
const tableBody = document.getElementById('appointments-table-body')

// Display all appointments in the table body
fadeFinder.displayAppointments(tableBody)

// Add an event listener to the form for filtering appointments
document
  .getElementById('filter-appointments-form')
  .addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault()

    // Get the date value from the form input
    const date = document.getElementById('filter-date').value

    // Filter the appointments by the selected date
    const filteredAppointments = fadeFinder.filterAppointmentsByDate(date)

    // Display the filtered appointments in the table body
    fadeFinder.displayAppointments(tableBody, filteredAppointments)
  })

// Add an event listener to the table body for clicking on buttons
tableBody.addEventListener('click', (event) => {
  // Check if the target of the click event is a button
  if (event.target.tagName === 'BUTTON') {
    // Get the appointment index from the button's data attribute
    const appointmentIndex = parseInt(
      event.target.getAttribute('data-index'),
      10
    )

    // Get the appointment object using the index
    const appointment = fadeFinder.appointments[appointmentIndex]

    // Get the table row element
    const row = event.target.parentElement.parentElement

    // Edit the appointment using the appointment object and row element.
    fadeFinder.editAppointment(appointment, row)
  }
})
