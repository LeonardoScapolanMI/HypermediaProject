import express from 'express'
import {CreateServices, DestroyServices} from './model/dataUpload/Services.js'
import { CreatePOIs, DestroyPOIs } from './model/dataUpload/POI.js'
import dbData from './model/database.js'

const app = express()

app.get('/', async (req, res) => {
  await dbData
  res.status(200).send('Hello')
})

app.get('/insert/services', async (req, res) => {
  try{
    await DestroyServices()
    await CreateServices()
    res.status(200).send('Services stuff inserted')
  }
  catch(e){
    console.log(e)
    res.status(500).send(e)
  }
})

app.get('/insert/pois', async (req, res) => {
  try{
    await DestroyPOIs()
    await CreatePOIs()
    res.status(200).send('POIs stuff inserted')
  }
  catch(e){
    console.log(e)
    res.status(500).send(e.message)
  }
})

app.get('/insert', async (req, res) => {
  try{
    await DestroyPOIs()
    await DestroyServices()
    await CreatePOIs()
    await CreateServices()
    res.status(200).send('All stuff inserted')
  }
  catch(e){
    console.log(e)
    res.status(500).send(e.message)
  }
})

export default app
