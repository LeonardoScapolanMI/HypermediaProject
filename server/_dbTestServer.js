import express from 'express'
import { CreateServices} from './model/dataUpload/Services.js'
import { CreatePOIs} from './model/dataUpload/POI.js'
import dbData from './model/database.js'
require('dotenv').config()

const app = express()

if (process.env.TEST_DB) {
  app.get('/', async (req, res) => {
    await dbData
    res.status(200).send('Hello')
  })
}

if (process.env.RESET_DB) {
  app.get('/insert', async (req, res) => {
    try {
      await (await dbData).SyncDatabase(true)
      await CreatePOIs()
      await CreateServices()
      res.status(200).send('All stuff inserted')
    } catch (e) {
      console.log(e)
      res.status(500).send(e.message)
    }
  })
}

export default app
