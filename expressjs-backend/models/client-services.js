const mongoose = require('mongoose')
const clientModel = require('./client')
mongoose.set('debug', true)

require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error))

async function getClients() {
  let results = await clientModel.find()
  return results
}

async function addClient(client) {
  try {
    const clientToAdd = new clientModel(client)
    const savedClient = await clientToAdd.save()
    return savedClient
  } catch (error) {
    console.log(error)
    return false
  }
}

exports.getClients = getClients
exports.addClient = addClient
