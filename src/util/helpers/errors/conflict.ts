import AppError from './app-error'

export default class Conflict extends AppError {
  constructor (message: string) {
    super(message, 409, 'Conflict')
  }
}
