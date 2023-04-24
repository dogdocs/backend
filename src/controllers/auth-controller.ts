import { Request, Response } from "express";
import { IAuthLoginDTO } from "../interfaces/dto/i-auth-dto";
import { IAuthLogin } from "../interfaces/i-auth";
import { AuthLoginUseCase } from "../use-cases/auth/auth-login-use-case";

export class AuthController {
  async login (request: Request, response: Response): Promise<Response<IAuthLoginDTO>> {
    const params: IAuthLogin = request.body

    const result = await new AuthLoginUseCase().login(params)

    return response.json(result)
  }
}