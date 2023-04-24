import UserModel from "../../models/User"
import Unauthorized from "../../util/helpers/errors/unauthorized"
import bcrypt from 'bcryptjs'
import { TokenUseCase } from "./token-use-case"


interface IAuthLogin {
  email: string
  password: string
}

interface IAuthLoginDTO {
  userId: string,
  email: string,
  token: string
}

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