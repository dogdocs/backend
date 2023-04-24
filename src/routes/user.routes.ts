import { Router } from "express"
import { UserController } from "../controllers/user-controller"

const controller = new UserController()
const router = Router()

router.post('/user', controller.create)

export { router as UserRoutes }