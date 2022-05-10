import express from 'express'
import dbData from './database.js'



//NB: MUST SET .env file with env variable DATABASE_URL
const app = express()

app.get('/', (req, res) => {
    dbData.connect()
    res.status(200).send('Hello')
  })

//Get all POIs
app.get('/poi', async (req, res) => {
  dbData.connect()
  const result = await dbData.PointOfInterest.findAll({include:{model: dbData.Image} })
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          description: element.description,
          longitute: element.longitude,
          latitude: element.latitude,
          images: element.Images,
      })
  }
  console.log(result)
  return res.json(filtered)
})
  
//Get all Itineraries 
app.get('/itinerary', async (req, res) => {
  dbData.connect()
  const result = await dbData.Itinerary.findAll({include:{model: dbData.PointOfInterest} })
  const filtered = []
  for (const element of result) {
      filtered.push({
          name: element.name,
          overview: element.overview,
          poi: element.PointOfInteres,
      })
  }
  //console.log(result)
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