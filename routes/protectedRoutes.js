import express from 'express'
import { saludar } from '../controllers/protectedControler.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
/* import { validarRolAdmin } from '../middlewares/validar-rol-admin.js' */

const protectedRoutes = express.Router()

protectedRoutes.post('', [validarJWT], saludar)

export default protectedRoutes
