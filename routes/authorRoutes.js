// authorRoutes.js
import express from 'express'
import { createAuthor, getAllAuthors, getAuthorById } from '../controllers/authorController.js'

const router = express.Router()

// Ruta para crear un nuevo autor
router.post('', createAuthor)

// Ruta para obtener todos los autores
router.get('', getAllAuthors)

// Ruta para obtener un autor por ID
router.get('/:id', getAuthorById)

export default router
