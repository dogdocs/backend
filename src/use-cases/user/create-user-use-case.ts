import bcrypt from 'bcryptjs';
import UserModel from "../../models/User"

interface IUserCreate {
  email: string
  password: string
}

interface IUserCreateDTO {
  message: string
}

export class CreateUserUseCase {
  async handle (user: IUserCreate): Promise<IUserCreateDTO> {

    const password = bcrypt.hashSync(user.password)

    const newUser = UserModel.create({
      email: user.email,
      password
    })

    return {
      message: "User created!"
    }
  }
}