import { Router } from "express";
import { GreetingRouter } from "./greeting.routes";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

const router = Router()

router.use(GreetingRouter)
router.use(AuthRoutes)
router.use(UserRoutes)

export { router }