import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (request, response) => {
  return response.json({ message: "You are cyber ready!"})
})

app.listen(3333)