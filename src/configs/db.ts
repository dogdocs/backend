import mongoose from "mongoose"
import { LogggerFactory } from "../util/factories/logger"

export const mongoConnection = () => {
  const logger = LogggerFactory()
  const mongoURL = process.env.MONGO_URL as string
  const mongoUser = process.env.MONGO_USER as string
  const mongoPassword = process.env.MONGO_PASS as string


  const start = async () => {
    logger.info('Start connection with mongodb....')
    try {
      mongoose.connect(mongoURL, { auth: {
        username: mongoUser,
        password: mongoPassword
      }})
      logger.info('🚀 Database Connected')
    } catch (err) {
      logger.error('Mongo connection error', err)
    }
  }

  return {
    start
  }
}