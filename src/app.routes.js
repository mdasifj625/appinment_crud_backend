import { Router } from 'express'
import RateLimit from 'express-rate-limit'
import { appointmentRouter } from './modules/appointment/routers/index.js'

const rateLimiter = RateLimit({
  windowMs: 60 * 1000 * 1, // Time window of 1 minute
  max: 1000, // Max hits allowed
  standardHeaders: false,
  legacyHeaders: false,
})

const router = Router()
router.use(rateLimiter)

router.use('/appointments', appointmentRouter)

export { router as AppRoutes }
