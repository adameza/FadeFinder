const mongoose = require('mongoose')

//qrCCkopZ6AzPwztj

const AppointmentSchema = new mongoose.Schema(
  {
    date: {
      startTime: Date,
      endTime: Date
    },
    client: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      trim: false,
    },
    barber_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: false,
    },
  },
  { collection: 'appointments' }
)

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment
