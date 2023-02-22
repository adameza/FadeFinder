const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const express = require('express')
const app = express()

const port = 5000

const clientServices = require('./models/client-services')
// const barberServices = require('./models/barber-services');
const appointmentServices = require('./models/appointment-services')

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

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

app.get('/barbers', async (req, res) => {
  try {
    const result = await barberServices.getBarbers()
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.get('/appointments', async (req, res) => {
  try {
    const result = await appointmentServices.getAppointments()
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})
