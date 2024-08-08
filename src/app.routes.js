import { Router } from 'express'
import { appointmentRouter } from './modules/appointment/routers/index.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('success')
})

router.use('/appointments', appointmentRouter)

export { router as AppRoutes }
