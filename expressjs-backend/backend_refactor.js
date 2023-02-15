const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const barbers = {
  barbers_list: [
    {
      id: '123456',
      name: 'Jane Smith',
      availability: [
        { day: 'Monday', startTime: '9:00', endTime: '17:00' },
        { day: 'Tuesday', startTime: '9:00', endTime: '17:00' },
        { day: 'Wednesday', startTime: '9:00', endTime: '17:00' },
        { day: 'Thursday', startTime: '9:00', endTime: '17:00' },
        { day: 'Friday', startTime: '9:00', endTime: '17:00' },
      ],
    },
  ],
}

const clients = {
  clients_list: [{ id: '123456' }],
}
