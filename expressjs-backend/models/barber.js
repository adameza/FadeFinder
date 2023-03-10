const mongoose = require('mongoose')

const BarberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    availability: [{ startTime: Date, endTime: Date }],
    appointments: [ { type: mongoose.Types.ObjectId } ],
    lat: { type: Number },
    lon: { type: Number },
  },
  { collection: 'barbers' }
)

const Barber = mongoose.model('Barber', BarberSchema)

module.exports = Barber
