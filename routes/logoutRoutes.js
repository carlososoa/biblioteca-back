import express from 'express'

import { logout } from '../controllers/logoutController.js'

const logoutRouter = express.Router()

logoutRouter.post('', logout)

export default logoutRouter
