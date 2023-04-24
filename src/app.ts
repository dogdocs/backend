import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { ErrorRequestHandler } from './configs/error-request-handler'
import { router } from './routes/router'
import { mongoConnection } from './configs/db';


const app = express()

// mongoConnection().start()
app.use(express.json({limit: '200mb'}))
app.use(cors())
app.use('/api', router)
app.use(ErrorRequestHandler)

export { app }