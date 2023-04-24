import UserModel from "../../models/User"
import Unauthorized from "../../util/helpers/errors/unauthorized"
import bcrypt from 'bcryptjs'
import { TokenUseCase } from "./token-use-case"
import { IAuthLogin } from "../../interfaces/i-auth"
import { IAuthLoginDTO } from "../../interfaces/dto/i-auth-dto"

export class AuthLoginUseCase {
  async login (auth: IAuthLogin): Promise<IAuthLoginDTO> {
    const login = await UserModel.findOne({
      where: {
        email: auth.email
      }
    })

    if (!login) {
      throw new Unauthorized('E-mail ou senha inválidos!')
    }

    const isValidPass: boolean = await bcrypt.compare(auth.password, login.password)

    
    if (!isValidPass) {
      throw new Unauthorized('E-mail ou senha inválidos!')
    }

    const token: string = new TokenUseCase().generateToken({
      userId: login._id,
      email: login.email
    })

    return {
      email: login.email,
      userId: login._id,
      token
     }
  }
}