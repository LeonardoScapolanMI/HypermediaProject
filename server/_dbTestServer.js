import express from 'express'
import dbData from './model/database.js'

const app = express()

app.get('/', (req, res) => {
  dbData()
  res.status(200).send('Hello')
})

export default app
