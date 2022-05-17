import express from 'express'
import dbData from './model/database.js'

// NB: MUST SET .env file with env variable DATABASE_URL
const app = express()

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
      name: element.name,
      description: element.description,
      longitute: element.longitude,
      latitude: element.latitude,
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
      longitute: element.longitude,
      latitude: element.latitude,
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
      poi: element.PointOfInteres,
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
      poi: element.PointOfInteres,
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
app.post("/usermessage",(req,res)=>{
  const data = await dbData
  const { name } = req.body.name
  const { lname } = req.body.last_name
  const { email } = req.body.email
  const { message } = req.body.messsage
  //data.UserMessage.create(name,lname,email,message)
  data.UserMessage.create({
    firstName : name,
    lastName : lname,
    email : email,
    message : message,
  })
})

export default app
