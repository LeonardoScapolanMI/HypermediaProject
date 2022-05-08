import express from 'express'
import dbData from './database.js'

const app = express()

app.get('/', (req, res) => {
  dbData.connect()
  res.status(200).send('Hello')
})

export default app
