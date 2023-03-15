const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const express = require('express')
const app = express()

const port = 5000

const clientServices = require('./models/client-services')
const barberServices = require('./models/barber-services')
const appointmentServices = require('./models/appointment-services')
const utils = require ('./oauth_utils');

app.use(cors())
app.use(express.json())

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*************** Client Routes ***************/

app.get('/clients', async (req, res) => {
  // const name = req.query['name'];
  // const email = req.query['email'];
  try {
    const result = await clientServices.getClients()
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.post('/clients', async (req, res) => {
  const client = req.body
  const result = await clientServices.addClient(client)
  if (result) res.status(201).send(result)
  else res.status(500).end()
})

/*************** Barber Routes ***************/

app.get('/barbers', async (req, res) => {
  try {
    const result = await barberServices.getBarbers()
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.get('/barbers/:name', async (req, res) => {
  const barberName = req.params['name']
  const result = await barberServices.getBarberByName(barberName)
  if (result === undefined || result === null)
    res.status(404).send('Resource not found.')
  else {
    res.send({ barber: result })
  }
})

app.get('/barbers/:name/:email', async (req, res) => {
  const targetName = req.params['name']
  const targetEmail = req.params['email']
  const all_barbers = await barberServices.getBarbers()
  console.log(all_barbers)
  console.log(targetName)
  console.log(targetEmail)
  let result = undefined
  all_barbers.forEach((barber) => {
    if (barber.name === targetName && barber.email === targetEmail) {
      result = barber
    }
  })
  if (result === undefined || result === null)
    res.status(404).send('Resource not found.')
  else {
    res.send({ barber: result })
  }
})

app.post('/barbers/:name/avail', async (req, res) => {
  const avail_list = req.body
  const barberName = req.params['name']
  const result = await barberServices.addAvailability(barberName, avail_list)
  if (result) res.status(201).send(result)
  else res.status(500).send(result)
})

app.delete('/barbers/:name/avail', async (req, res) => {
  const barberName = req.params['name'] //or req.params.id
  const avail = req.body
  let result = await barberServices.deleteAvailabilty(barberName, avail)
  if (result === undefined || result.length == 0)
    res.status(404).send('Resource not found.')
  else {
    res.status(200).send(result)
  }
})

app.post('/barbers', async (req, res) => {
  const barber = req.body
  const result = await barberServices.addBarber(barber)
  if (result) res.status(201).send(result)
  else res.status(500).end()
})

/*************** Appointment Routes ***************/

app.get('/appointments', async (req, res) => {
  try {
    const result = await appointmentServices.getAppointments()
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.get('/appointments/:day', async (req, res) => {
  try {
    const day = req.params['day']
    const barbers = await barberServices.getBarbers()
    console.log(barbers)
    let times = []
    barbers.forEach((barber) => {
      barber.availability.forEach((time) => {
        if (time.day == day) times.push({ name: barber.name, time: time })
      })
    })
    res.send({ times })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.post('/appointments', async (req, res) => {
  const appointment = req.body
  const result = await appointmentServices.addAppointment(appointment)
  if (result) res.status(201).send(result)
  else res.status(500).end()
})


module.exports = server;
