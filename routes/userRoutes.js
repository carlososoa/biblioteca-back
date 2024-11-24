import express from 'express'
import { createUser, getAllUsers, getUser, getUserByUsername, actualizarById } from '../controllers/userController.js'

const router = express.Router()

router.post('/users', createUser)
router.get('/users', getAllUsers)
router.get('/users/:user_id', getUser)
router.get('/user-by-username/:username', getUserByUsername)
router.put('/users/:user_id', actualizarById) // esta ruta solo actualiza datos de contacto

export default router
