import { response, Router } from 'express'
import { appointmentRouter } from './modules/appointment/routers/index.js'
import axios from 'axios'

const router = Router()

router.get('/', (req, res) => {
  axios
    .post(
      'https://gameapi.thespartanpoker.in/pokerapi/v1/purchase/webhooks/0/juspay',
      {
        account_id: 'acc_FRjUqbTJsJjpuk',
        contains: ['refund', 'payment'],
        created_at: 1713721100,
        entity: 'event',
        event: 'refund.processed',
        payload: {
          payment: {
            entity: {
              acquirer_data: {
                bank_transaction_id: '7994624',
              },
              amount: 100,
              amount_refunded: 100,
              amount_transferred: 0,
              bank: 'KKBK',
              base_amount: 100,
              captured: true,
              card_id: null,
              contact: '+918507371108',
              created_at: 1713720699,
              currency: 'INR',
              description: '#O1M6tCam84JiqK',
              email: 'void@razorpay.com',
              entity: 'payment',
              error_code: null,
              error_description: null,
              error_reason: null,
              error_source: null,
              error_step: null,
              fee: 2,
              id: 'pay_O1M79boSHaZFGr',
              international: false,
              invoice_id: null,
              method: 'netbanking',
              notes: [],
              order_id: 'order_O1M70ZaWic7jdp',
              refund_status: 'full',
              status: 'refunded',
              tax: 0,
              vpa: null,
              wallet: null,
            },
          },
          refund: {
            entity: {
              acquirer_data: {
                arn: '10000000000000',
              },
              amount: 100,
              batch_id: null,
              created_at: 1713721097,
              currency: 'INR',
              entity: 'refund',
              id: 'rfnd_O1MEA66CoELCqy',
              notes: {
                comment: '',
              },
              payment_id: 'pay_O1M79boSHaZFGr',
              receipt: null,
              speed_processed: 'normal',
              speed_requested: 'normal',
              status: 'processed',
            },
          },
        },
      },
      {
        headers: {
          Authorization:
            'Basic VEljZWF0Y0hlaXN0b2tFckJPZElDQWxHRTp2Vjhyc2ohN3VMd0gpKXlSZFlZKVdzYlI1YUF1RUNYJnZOcEFNRTJaSjc5RFZaKTgjZzZ5Y3NmM3VQZzNhUVpX',
        },
      }
    )
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
