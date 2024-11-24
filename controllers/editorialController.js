// editorialController.js
import { Editorial } from '../models/editorial.js'

// Crear una nueva editorial
export const createEditorial = async (req, res) => {
  try {
    const editorialData = req.body
    await Editorial.create(editorialData)
    res.status(201).json({ message: 'Editorial creada exitosamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la editorial' })
  }
}

// Obtener todas las editoriales
export const getAllEditorials = async (req, res) => {
  try {
    const editorials = await Editorial.findAll()
    res.status(200).json(editorials)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las editoriales' })
  }
}

// Obtener una editorial por ID
export const getEditorialById = async (req, res) => {
  try {
    const { id } = req.params
    const editorial = await Editorial.findById(id)
    if (editorial.length > 0) {
      res.status(200).json(editorial[0])
    } else {
      res.status(404).json({ message: 'Editorial no encontrada' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la editorial' })
  }
}
