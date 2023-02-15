class FadeFinder {
  constructor() {
    this.barbers = [
      {
        name: 'Jane Smith',
        availability: [
          { day: 'Monday', startTime: '9:00', endTime: '17:00' },
          { day: 'Tuesday', startTime: '9:00', endTime: '17:00' },
          { day: 'Wednesday', startTime: '9:00', endTime: '17:00' },
          { day: 'Thursday', startTime: '9:00', endTime: '17:00' },
          { day: 'Friday', startTime: '9:00', endTime: '17:00' },
        ],
      },

      {
        name: 'John Doe',
        availability: [
          { day: 'Monday', startTime: '10:00', endTime: '18:00' },
          { day: 'Tuesday', startTime: '10:00', endTime: '18:00' },
          { day: 'Wednesday', startTime: '10:00', endTime: '18:00' },
          { day: 'Thursday', startTime: '10:00', endTime: '18:00' },
          { day: 'Friday', startTime: '10:00', endTime: '18:00' },
        ],
      },
    ]

    this.appointments = []
  }

  scheduleAppointment(
    clientName,
    clientEmail,
    barberName,
    appointmentDate,
    appointmentTime
  ) {
    // Check if the barber is available on the specified date and time.
    if (!this.isBarberAvailable(barberName, appointmentDate, appointmentTime)) {
      console.log('TThe barber is not available at the specified time.')
      return
    }

    // Schedule the appointment.
    const appointment = {
      clientName: clientName,
      barberName: barberName,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
    }
    this.appointments.push(appointment)

    // Send confirmation email.
    this.sendConfirmationEmail(clientEmail, appointment)
  }

  sendConfirmationEmail(email, appointment) {
    // Example implementation: log the confirmation email to the consle.
    console.log(`Sending confirmation email to ${email}`)
    console.log(`Dear ${appointment.clientName}`)
    console.log(
      `Your appointment with ${
        appointment.clientName
      } on ${appointment.appointmentDate.toLocaleDateString()} at ${
        appointment.appointmentTime
      } has been successfully scheduled.`
    )
    console.log(`Thank you for choosing FadeFinder!`)
  }

  isBarberAvailable(barberName, appointmentDate, appointmentTime) {
    // Check if there is already on appointmnet with the same barber at the same time.
    for (const appointment of this.appointments) {
      if (
        appointment.barberName === barberName &&
        appointment.appointmentDate.getTime() === appointmentDate.getTime() &&
        appointment.appointmentTime === appointmentTime
      ) {
        return false
      }
    }
    return true
  }

  getAppointmentsByBarber(barberName) {
    return this.appointments.filter(
      (appointment) => appointment.barberName === barberName
    )
  }

  getAppointmentsByDate(appointmentDate) {
    return this.appointments.filter(
      (appointment) =>
        appointment.appointmentDate.getTime() === appointmentDate.getTime()
    )
  }

  getAppointmentsByClient(clientName) {
    return this.appointments.filter(
      (appointment) => appointment.clientName === clientName
    )
  }

  cancelAppointment(appointment) {
    const index = this.appointments.indexOf(appointment)

    if (index === -1) {
      console.log('Appointment not found.')
      return
    }

    this.appointments.splice(index, 1)
    console.log('Appointment successfully canceled.')
  }

  updateAppointment(appointment, updateAppointment) {
    const index = this.appointments.indexOf(appointment)

    if (index === -1) {
      console.log('Appointment not found.')
      return
    }

    this.appointments[index] = updateAppointment
    console.log('Appointment successfully updated.')
  }

  getBarberAvailability(barberName) {
    const barber = this.barbers.find((b) => b.name === barberName)

    if (!barber) {
      console.log(`Barber "${barberName}" not found.`)
      return
    }
    return barber.availability
  }

  getMostPopularBarber() {
    const barberAppointments = {}

    for (const appointment of this.appointments) {
      if (!barberAppointments[appointment.barberName]) {
        barberAppointments[appointment.barberName] = 0
      }
      barberAppointments[appointment.barberName]++
    }

    let getMostPopularBarber = null
    let mostAppointments = 0

    for (const barberName in barberAppointments) {
      if (barberAppointments[barberName] > mostAppointments) {
        mostPopularBarber = barberName
        mostAppointments = barberAppointments[barberName]
      }
    }
    return mostPopularBarber
  }

  sendingAppointmentReminders() {
    const now = new Date()
    const upcomingAppointments = this.appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointmentDate)
      return (
        appointmentDate > now &&
        appointmentDate < new Date(now.getTime() + 24 * 60 * 60 * 1000)
      )
    })

    for (const appointment of upcomingAppointments) {
      console.log(`Sending appointment reminder to ${appointment.clientEmail}`)
      console.log(`Dear ${appointment.clientName}`)
      console.log(
        `This is a reminder about your upcomign appoinment with ${
          appointment.barberName
        } on ${appointment.appointmentDate.toLocaleDateString()} at ${
          appointment.appointmentTime
        }.`
      )
      console.log(`We look forward to seeing you!`)
    }
  }
}
