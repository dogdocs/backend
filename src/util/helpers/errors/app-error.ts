export default class AppError {
  public readonly statusCode: number
  public readonly message: string
  public readonly status?: string
  public readonly details?: Object

  constructor (message: string, statusCode: number = 400, status = 'Error') {
    this.message = message
    this.statusCode = statusCode
    this.status = status
  }
}
