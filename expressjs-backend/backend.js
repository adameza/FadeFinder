const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

const clientServices = require('./mongoose/client-services');
const barberServices = require('./mongoose/barber-services');
const appointmentServices = require('./mongoose/appointment-services');


app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/clients', async (req, res) => {
  // const name = req.query['name'];
  // const email = req.query['email'];
  try {
      const result = await clientServices.getClients();
      res.send({result});   
  } catch (error) {
      console.log(error);
      res.status(500).send('An error ocurred in the server.');
  }
});

app.get('/barbers', async (req, res) => {

  try {
      const result = await barberServices.getBarbers();
      res.send({result});   
  } catch (error) {
      console.log(error);
      res.status(500).send('An error ocurred in the server.');
  }
});

app.get('/appointments', async (req, res) => {
  try {
      const result = await appointmentServices.getAppointments();
      res.send({result});   
  } catch (error) {
      console.log(error);
      res.status(500).send('An error ocurred in the server.');
  }
});