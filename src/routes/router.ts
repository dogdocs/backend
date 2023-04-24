import { Router } from "express";
import { GreetingRouter } from "./greeting.routes";
import { UserRoutes } from "./user.routes";

const router = Router()

router.use(GreetingRouter)
router.use(UserRoutes)

export { router }