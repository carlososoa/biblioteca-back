import express from 'express'
import { createUser, getAllUsers, getUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/users', createUser)
router.get('/users', getAllUsers)
router.get('/users/:user_id', getUser)

export default router
