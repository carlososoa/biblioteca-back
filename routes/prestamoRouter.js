import express from 'express'
import { createPrestamo, getAllPrestamos, getPrestamoById, getPrestamosByUserId, getPrestamosByLibroId, updatePrestamo, deletePrestamo, getAllPrestamosActivos,  devolucionLibro } from '../controllers/prestamoController.js'

const prestamoRouter = express.Router()

prestamoRouter.post('', createPrestamo)
prestamoRouter.get('/activos', getAllPrestamosActivos)
prestamoRouter.get('/user/:user_id', getPrestamosByUserId)
prestamoRouter.get('/libro/:libro_id', getPrestamosByLibroId)
prestamoRouter.get('/id/:prestamo_id', getPrestamoById) // Pon esta ruta después de las más específicas
prestamoRouter.get('', getAllPrestamos)
prestamoRouter.put('/devolucion/:id', devolucionLibro)
prestamoRouter.put('/:id', updatePrestamo)
prestamoRouter.delete('/:id', deletePrestamo)

export default prestamoRouter
