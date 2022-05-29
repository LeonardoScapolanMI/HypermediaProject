import express from 'express'
import dbData from './model/database.js'

// NB: MUST SET .env file with env variable DATABASE_URL
const app = express()

// middleware for decoding bodies of requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

// Get all POIs
app.get('/poi', async (req, res) => {
  const data = await dbData
  const result = await data.PointOfInterest.findAll({
    include: { model: data.Image },
  })
  const filtered = []
  for (const element of result) {
    filtered.push({
      id : element._id,
      name: element.name,
      description: element.description,
      mapurl : element.mapURL,
      images: element.Images,
    })
  }
  //console.log(result)
  return res.json(filtered)
})

//get poi from id
app.get('/poi:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.PointOfInterest.findOne({
    where:{ _id },
    include: { model: data.Image },
  })
  const filtered = []
  for (const element of result) {
    filtered.push({
      name: element.name,
      description: element.description,
      mapurl : element.mapUrl,
      images: element.Images,
    })
  }
  //console.log(result)
  return res.json(filtered)
})


// Get all Itineraries
app.get('/itinerary', async (req, res) => {
  
  const data = await dbData
  const result = await data.Itinerary.findAll({
    include: { model: data.PointOfInterest },
  })
  const filtered = []
  for (const element of result) {
    filtered.push({
      name: element.name,
      overview: element.overview,
      poi: element.PointOfInterest,
    })
  }
  // console.log(result)
  return res.json(filtered)
})

// Get  Itinerary from id
app.get('/itinerary:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.Itinerary.findOne({
    where: { _id },
    include: { model: data.PointOfInterest },
  })
  const filtered = []
  for (const element of result) {
    filtered.push({
      name: element.name,
      overview: element.overview,
      poi: element.PointOfInterest,
    })
  }
  // console.log(result)
  return res.json(filtered)
})

// Get all Services
app.get('/service', async (req, res) => {
  const data = await dbData
  const result = await data.Service.findAll()
  const filtered = []
  for (const element of result) {
    filtered.push({
      name: element.name,
      phone: element.phone,
      email: element.email,
      adress: element.address,
    })
  }
  //console.log(filtered)
  return res.json(filtered)
})

// Get  Service from id
app.get('/service:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.Service.findOne({
    where: {_id},
  })
  const filtered = []
  for (const element of result) {
    filtered.push({
      name: element.name,
      phone: element.phone,
      email: element.email,
      adress: element.address,
    })
  }
  //console.log(filtered)
  return res.json(filtered)
})

// Get all Events
app.get('/event', async (req, res) => {
  const data = await dbData
  const result = await data.Event.findAll()
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
  //console.log(filtered)
  return res.json(filtered)
})
//Get event from id
app.get('/event:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.Event.findOne({
    where:{ _id},
  })
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

//POST ACTION for the form
app.post("/usermessage", async (req,res)=>{
  try{
  const data =  await dbData
  console.log(req.body)
  const mam = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  }
  data.UserMessage.create(mam)
  res.send(200)
  }
  catch(e){
    res.send(500)
  }
})

export default app
