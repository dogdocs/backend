import AppError from './app-error'

export default class BadRequest extends AppError {
  constructor (message: string) {
    super(`Campo '${message} é obrigatório!'`, 400, 'Bad Request')
  }
}
