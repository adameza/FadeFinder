process.env.PORT = 4000; // set the PORT environment variable to 4000


const request = require('supertest')
const backend = require('./backend.js')
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

describe('GET /clients', () => {
  let server

  beforeAll(() => {
    server = backend.listen(4000)
  })

  afterAll((done) => {
    server.close(done)
  })

  it('should return a 200 status code', async () => {
    const response = await request(server).get('/clients')
    expect(response.statusCode).toBe(200)
  })

  it('should return a JSON response', async () => {
    const response = await request(server).get('/clients')
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

describe('POST /clients', () => {
  let server

  beforeAll(() => {
    server = backend.listen(4000)
  })

  afterAll((done) => {
    server.close(done)
  })

  it('should return a 201 status code when a client is added', async () => {
    const response = await request(server)
      .post('/clients')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com'
      })
    expect(response.statusCode).toBe(201)
  })

  it('should return a JSON response when a client is added', async () => {
    const response = await request(server)
      .post('/clients')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com'
      })
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

const barberServices = require('./models/barber-services')

// Mock data
const mockBarbers = [  { name: 'Barber1', email: 'barber1@example.com' },  { name: 'Barber2', email: 'barber2@example.com' },  { name: 'Barber3', email: 'barber3@example.com' }]

// Mock functions
barberServices.getBarbers = jest.fn().mockReturnValue(mockBarbers)
barberServices.getBarberByName = jest.fn().mockReturnValue(mockBarbers[0])

describe('GET /barbers', () => {
  it('should return a list of barbers', async () => {
    const response = await request(app).get('/barbers')
    expect(response.statusCode).toBe(200)
    expect(response.body.result).toEqual(mockBarbers)
  })

  it('should return a 500 status code when an error occurs', async () => {
    barberServices.getBarbers.mockImplementation(() => {
      throw new Error('Database connection error')
    })

    const response = await request(app).get('/barbers')
    expect(response.statusCode).toBe(500)
  })
})

describe('GET /barbers/:name', () => {
  it('should return a barber with the given name', async () => {
    const response = await request(app).get('/barbers/Barber1')
    expect(response.statusCode).toBe(200)
    expect(response.body.barber).toEqual(mockBarbers[0])
  })

  it('should return a 404 status code when the barber is not found', async () => {
    barberServices.getBarberByName.mockReturnValue(undefined)

    const response = await request(app).get('/barbers/NonExistentBarber')
    expect(response.statusCode).toBe(404)
  })
})

describe('GET /barbers/:name/:email', () => {
  it('should return a barber with the given name and email', async () => {
    const response = await request(app).get('/barbers/Barber1/barber1@example.com')
    expect(response.body.barber).toEqual(mockBarbers[0])
  })

  it('should return a 404 status code when the barber is not found', async () => {
    const response = await request(app).get('/barbers/NonExistentBarber/nonexistent@example.com')
    expect(response.statusCode).toBe(404)
  })
})
