
import express from 'express'
import connectDB from './db/db.js'
import dotenv from 'dotenv'
import clientRoutes from './routes/Clients.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', clientRoutes)

const port = 3000
const URL = 'htpp://localhost'

app.listen(port, () => {
  console.log(`Your server is running on ${URL}:${port} 👌`)
})