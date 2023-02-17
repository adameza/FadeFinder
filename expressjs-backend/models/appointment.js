const mongoose = require('mongoose')

//qrCCkopZ6AzPwztj

const AppointmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: Number,
      required: true,
      trim: false,
    },
    barber: {
      type: Number,
      required: true,
      trim: false,
    },
  },
  { collection: 'appointments' }
)

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment
