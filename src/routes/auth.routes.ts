import { Router } from "express"
import { UserController } from "../controllers/user-controller"
import { AuthController } from "../controllers/auth-controller"

const controller = new AuthController()
const router = Router()

router.post('/auth', controller.login)

export { router as UserRoutes }