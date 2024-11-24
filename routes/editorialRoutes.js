// editorialRoutes.js
import express from 'express'
import { createEditorial, getAllEditorials, getEditorialById } from '../controllers/editorialController.js'

const router = express.Router()

// Ruta para crear una nueva editorial
router.post('', createEditorial)

// Ruta para obtener todas las editoriales
router.get('', getAllEditorials)

// Ruta para obtener una editorial por ID
router.get('/:id', getEditorialById)

export default router
