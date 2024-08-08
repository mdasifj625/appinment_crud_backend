import { response, Router } from 'express'
import { appointmentRouter } from './modules/appointment/routers/index.js'
import axios from 'axios'

const router = Router()

router.get('/', (req, res) => {
  axios
    .post('https://deqlokifuyu9.thespartanpoker.in/api-gateway', {
      payload:
        'U2FsdGVkX18cHV/M/evx6AcfvgxxZvTd0GoQH7y6g8gSO1N2qOEOh3LuiloQ48+6uwaclS4WAD9aLp81BPKhPtikqI9I+5fWNHez3zTw1QdfRn15rj5BlpogAQYu7pZ1h8lnfQAdYVE/SNFXn+ZYiTB11PbqfbtfHYWMNELKf21f61d9b8f7d8c1dkU=',
    })
    .then((response) => {
      res.send(response.data)
      console.log('response')
    })
    .catch((error) => {
      console.error(error)
      res.send(error)
    })
  // res.send('success')
})

router.use('/appointments', appointmentRouter)

export { router as AppRoutes }
