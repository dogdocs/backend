import { Request, Response, Router } from 'express';

const router = Router()

router.get('/greeting', (req: Request, res: Response) => {
  return res.send('Hello!')
})

export { router as GreetingRouter }