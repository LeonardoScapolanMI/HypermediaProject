import express from 'express'
import dbData from './database.js'

const app = express()

app.get('/', (req, res) => {
    dbData.connect()
    res.status(200).send('Hello')
  })

//Get all POIs
app.get('/poi', async (req, res) => {
  dbData.connect()
  const result = await dbData.PointOfInterest.findAll()
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          description: element.description,
          longitute: element.longitude,
          latitude: element.latitude,
      })
  }
  console.log(filtered)
  return res.json(filtered)
})
  
//Get all Itineraries 
app.get('/itinerary', async (req, res) => {
  dbData.connect()
  const result = await dbData.Itinerary.findAll()
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          overview: element.oveview,
      })
  }
  console.log(filtered)
  return res.json(filtered)
})

//Get all Services
app.get('/service', async (req, res) => {
  dbData.connect()
  const result = await dbData.Service.findAll()
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          phone: element.phone,
          email: element.email,
          adress: element.address,
      })
  }
  console.log(filtered)
  return res.json(filtered)
})

//Get all Events
app.get('/event', async (req, res) => {
  dbData.connect()
  const result = await dbData.Event.findAll()
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          overvuew: element.overview,
          startDate: element.startDate,
          endDate: element.endDate,
          cost: element.cost,
      })
  }
  console.log(filtered)
  return res.json(filtered)
})



export default app