import { Config } from './config.js'
import { Logger } from './logger.js'

import { Messages } from './constants/response.messages.js'

// Database Models
import { AppointmentModel } from '../model/appointment.js'

// Export Global Variables
export const Global = global
Global.Logger = Logger
Global.App = {
  Config,
  Messages,
  Models: { Appointment: AppointmentModel },
}
