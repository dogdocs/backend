import { NextFunction, Request, Response } from 'express'
import { LogggerFactory } from '../util/factories/logger'
import AppError from '../util/helpers/errors/app-error'

const logger = LogggerFactory()

export function ErrorRequestHandler (error: Error, req: Request, res: Response, next: NextFunction): Response {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      status: error.status,
      statusCode: error.statusCode
    })
  }

  logger.error(error)

  return res.status(500).json({
    message: 'Internal Server Error',
    status: 'error',
    type: 'unknown',
    statusCode: 500
  })
}
