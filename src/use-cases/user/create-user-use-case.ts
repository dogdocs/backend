import bcrypt from "bcryptjs";
import UserModel from "../../models/User";
import { IUserCreate } from "../../interfaces/i-user";
import { IUserCreateDTO } from "../../interfaces/dto/i-user-dto";
import AppError from "../../util/helpers/errors/app-error";

export class CreateUserUseCase {
  async handle(user: IUserCreate): Promise<IUserCreateDTO> {
    const password = bcrypt.hashSync(user.password);

    await UserModel.create({
      email: user.email,
      password,
    });

    return {
      message: "User created!",
    };
  }
}
