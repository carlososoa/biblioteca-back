// generoRoutes.js
import express from 'express'
import { createGenre, getAllGenres, getGenreById } from '../controllers/generoController.js'

const router = express.Router()

// Ruta para crear un nuevo género
router.post('', createGenre)

// Ruta para obtener todos los géneros
router.get('', getAllGenres)

// Ruta para obtener un género por ID
router.get('/:id', getGenreById)

export default router
