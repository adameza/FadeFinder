const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: 'clients' }
)

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client
