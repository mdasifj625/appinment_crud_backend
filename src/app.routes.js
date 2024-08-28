import { Router } from 'express'
import { appointmentRouter } from './modules/appointment/routers/index.js'
import axios from 'axios'

const router = Router()

router.get('/ping', (req, res) => {
  axios
    .get(
      'https://gamerouter.spartanpoker.com/ping'
    )
    .then((prod_ping) => {
      console.log('Production ping response: ', prod_ping.data)
      res.send(prod_ping.data)
    })
  // res.send('success')
})

router.use('/appointments', appointmentRouter)

export { router as AppRoutes }
