const mongoose = require('mongoose')

const BarberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    availability: [{ day: String, startTime: String }],
  },
  { collection: 'barbers' }
)

const Barber = mongoose.model('Barber', BarberSchema)

module.exports = Barber
