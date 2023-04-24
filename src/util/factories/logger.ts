import pino from "pino"

interface LoggerProtocols {
  info: (message: string) => void
  error: (message: string | Record<string, never> | Error, err?: Error | any) => void
  warn: (message: string) => void
}

const logger = pino()

export const LogggerFactory = (): LoggerProtocols => {
  const info = (message: string) => {
    logger.info(message)
  }

  const error = (message: string | Record<string, never> | Error) => {
    logger.error(message)
  }

  const warn = (message: string) => {
    logger.warn(message)
  }

  return {
    info,
    error,
    warn
  }
}