import express from 'express'

const app = express()

app.get('/icon.png', (req, res) => {
  res.status(200).sendFile('static/icon.png', {root: process.cwd()})
})

export default app