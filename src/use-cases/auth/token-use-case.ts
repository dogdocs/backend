import { sign } from 'jsonwebtoken'

export class TokenUseCase {
  generateToken (parameters: Object): string {
    return sign(parameters, process.env.APP_SECRET as string, { expiresIn: '24h' })
  }
}