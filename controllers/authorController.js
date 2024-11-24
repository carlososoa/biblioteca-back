// authorController.js
import { Author } from '../models/author.js'

// Crear un nuevo autor
export const createAuthor = async (req, res) => {
  try {
    const authorData = req.body
    await Author.create(authorData)
    res.status(201).json({ message: 'Autor creado exitosamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el autor' })
  }
}

// Obtener todos los autores
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll()
    res.status(200).json(authors)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' })
  }
}

// Obtener un autor por ID
export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params
    const author = await Author.findById(id)
    if (author.length > 0) {
      res.status(200).json(author[0])
    } else {
      res.status(404).json({ message: 'Autor no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el autor' })
  }
}
