const mongoose = require('mongoose')
const barberModel = require('./barber')
mongoose.set('debug', true)

require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error))

async function getBarbers() {
  let results = await barberModel.find()
  return results
}

async function addBarber(barber) {
  try {
    const barberToAdd = new barberModel(barber)
    const savedBarber = await barberToAdd.save()
    return savedBarber
  } catch (error) {
    console.log(error)
    return false
  }
}

async function getBarberByName(barber_name) {
  try {
    const barber = await barberModel.findOne({name: barber_name})
    return barber
  }
  catch (error) {
    console.log(error)
    return false
  }
}

async function addAvailability(barber_name, avail) {
  try {
    const barberToUpdate = await barberModel.findOne({name: barber_name})
    let avail_list = barberToUpdate.availability
    avail_list.push(avail)
    const res = await barberModel.updateOne({name: barber_name}, {availability: avail_list}) 
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
    return false
  }
}

exports.getBarbers = getBarbers
exports.getBarberByName = getBarberByName
exports.addBarber = addBarber
exports.addAvailability = addAvailability
