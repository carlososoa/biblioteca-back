import express from 'express'
import { createPrestamo, getAllPrestamos, getPrestamoById, getPrestamosByUserId, getPrestamosByLibroId, updatePrestamo, deletePrestamo } from '../controllers/prestamoController.js'

const prestamoRouter = express.Router()

prestamoRouter.post('', createPrestamo)
prestamoRouter.get('', getAllPrestamos)
prestamoRouter.get('/:id', getPrestamoById)
prestamoRouter.get('/user/:user_id', getPrestamosByUserId)
prestamoRouter.get('/libro/:libro_id', getPrestamosByLibroId)
prestamoRouter.put('/:id', updatePrestamo)
prestamoRouter.delete('/:id', deletePrestamo)

export default prestamoRouter
