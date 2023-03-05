const mongoose = require('mongoose')

//qrCCkopZ6AzPwztj

const AppointmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    client: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      trim: false,
    },
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: false,
    },
  },
  { collection: 'appointments' }
)

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment
