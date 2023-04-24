import { Request, Response } from "express";
import { IUserCreateDTO } from "../interfaces/dto/i-user-dto";
import { IUserCreate } from "../interfaces/i-user";
import { CreateUserUseCase } from "../use-cases/user/create-user-use-case";

export class UserController {
  async create(request: Request, response: Response): Promise<Response<IUserCreateDTO>> {

    const params: IUserCreate = request.body

    const result = await new CreateUserUseCase().handle(params)

    return response.json(result)
  }
}