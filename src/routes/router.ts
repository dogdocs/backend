import { Router } from "express";
import { GreetingRouter } from "./greeting.routes";

const router = Router()

router.use(GreetingRouter)

export { router }