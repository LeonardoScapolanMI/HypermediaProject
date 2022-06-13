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

  const queryOptions = {
    include: { model: data.Image },
  }

  if(req.query.startingIndex) queryOptions.offset = req.query.startingIndex
  if(req.query.itemCount) queryOptions.limit = req.query.itemCount

  const result = await data.PointOfInterest.findAll(queryOptions)
  const poiCount = await data.PointOfInterest.count()

  let isFinished = false
  if(!req.query.itemCount) {
    isFinished=true
  }
  else if(!req.query.startingIndex){
    isFinished = poiCount <= Number(req.query.itemCount)
  }
  else{
    isFinished = poiCount <= Number(req.query.itemCount) + Number(req.query.startingIndex)
  }


  const ret = {data:[], isFinished}
  for (const element of result) {
    ret.data.push({
      id : element._id,
      name: element.name,
      description: element.description,
      mapurl : element.mapURL,
      images: element.Images,
    })
  }
  //console.log(result)
  return res.json(ret)
})

// get poi from id
app.get('/poi:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const element = await data.PointOfInterest.findOne({
    where:{ _id },
    include: { model: data.Image },
  })
  
  //console.log(result)
  return res.json(element)
})


// Get all Itineraries
app.get('/itinerary', async (req, res) => {
  const data = await dbData

  const queryOptions = {
    include: { model: data.Image, as: "representativeImage" },
  }

  if(req.query.startingIndex) queryOptions.offset = req.query.startingIndex
  if(req.query.itemCount) queryOptions.limit = req.query.itemCount

  const result = await data.Itinerary.findAll(queryOptions)
  const poiCount = await data.Itinerary.count()

  let isFinished = false
  if(!req.query.itemCount) {
    isFinished=true
  }
  else if(!req.query.startingIndex){
    isFinished = poiCount <= Number(req.query.itemCount)
  }
  else{
    isFinished = poiCount <= Number(req.query.itemCount) + Number(req.query.startingIndex)
  }


  const ret = {data:[], isFinished}
  for (const element of result) {
    ret.data.push({
      id : element._id,
      name: element.name,
      description: element.overview,
      images: [element.representativeImage],
    })
  }
  //console.log(result)
  return res.json(ret)
})

// Get  Itinerary from id
app.get('/itinerary:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.Itinerary.findOne({
    where: { _id },
    include:[{ model: data.PointOfInterest, include:{model: data.Image}}, {model: data.Image, as: "representativeImage" }],
  })
 
  // console.log(result)
  return res.json(result)
})

// Get all Service types basic informations
app.get('/serviceType', async (req, res) => {
  const data = await dbData

  const queryOptions = {
    include: { model: data.Image},
  }

  if(req.query.startingIndex) queryOptions.offset = req.query.startingIndex
  if(req.query.itemCount) queryOptions.limit = req.query.itemCount

  const result = await data.ServiceType.findAll(queryOptions)
  const serviceTypeCount = await data.ServiceType.count()

  let isFinished = false
  if(!req.query.itemCount) {
    isFinished=true
  }
  else if(!req.query.startingIndex){
    isFinished = serviceTypeCount <= Number(req.query.itemCount)
  }
  else{
    isFinished = serviceTypeCount <= Number(req.query.itemCount) + Number(req.query.startingIndex)
  }


  const ret = {data:[], isFinished}
  for (const element of result) {
    ret.data.push({
      id : element._id,
      name: element.name,
      description: element.introduction,
      images: [element.Image],
    })
  }
  return res.json(ret)
})

// Get all Services
app.get('/service', async (req, res) => {
  const data = await dbData
  const result = await data.Service.findAll()
  const filtered = []
  for (const element of result) {
    filtered.push({
      id : element._id,
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

// Get all Events basic informations
app.get('/event', async (req, res) => {
  const data = await dbData

  const queryOptions = {
    include: { model: data.Image},
  }

  if(req.query.startingIndex) queryOptions.offset = req.query.startingIndex
  if(req.query.itemCount) queryOptions.limit = req.query.itemCount

  const result = await data.Event.findAll(queryOptions)
  const eventCount = await data.Event.count()

  let isFinished = false
  if(!req.query.itemCount) {
    isFinished=true
  }
  else if(!req.query.startingIndex){
    isFinished = eventCount <= Number(req.query.itemCount)
  }
  else{
    isFinished = eventCount <= Number(req.query.itemCount) + Number(req.query.startingIndex)
  }


  const ret = {data:[], isFinished}
  for (const element of result) {
    ret.data.push({
      id : element._id,
      name: element.name,
      description: element.overview,
      images: element.Images,
    })
  }
  return res.json(ret)
})

// Get all summer Events basic informations
app.get('/event/:season', async (req, res) => {
  const data = await dbData

  let begin
  let end
  switch(req.params.season) {
    case 'summer':
      begin = 4
      end = 9
      break;
    case 'winter':
      begin = 10
      end = 3
      break;
    default:
      begin = 1
      end = 12
  }

  // TODO add the paramethers
  const result = await data.Event.FindAllEventsBetweenMonths(begin, end, req.query.startingIndex, req.query.itemCount)
  const eventCount = await data.Event.CountAllEventsBetweenMonths(begin, end)

  let isFinished = false
  if(!req.query.itemCount) {
    isFinished=true
  }
  else if(!req.query.startingIndex){
    isFinished = eventCount <= Number(req.query.itemCount)
  }
  else{
    isFinished = eventCount <= Number(req.query.itemCount) + Number(req.query.startingIndex)
  }


  const ret = {data:[], isFinished}
  for (const element of result) {
    ret.data.push({
      id : element._id,
      name: element.name,
      description: element.overview,
      images: element.Images,
    })
  }

  return res.json(ret)
})

//Get event from id
app.get('/event:id', async (req, res) => {
  const _id = +req.params.id
  const data = await dbData
  const result = await data.Event.findOne({
    where:{ _id},
    include:[{ model: data.PointOfInterest},{model: data.Image}]
  })
  console.log(result)
  return res.json(result)
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
