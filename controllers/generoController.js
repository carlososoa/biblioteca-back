// generoController.js
import { Genre } from '../models/genero.js'

// Crear un nuevo género
export const createGenre = async (req, res) => {
  try {
    const genreData = req.body
    await Genre.create(genreData)
    res.status(201).json({ message: 'Género creado exitosamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el género' })
  }
}

// Obtener todos los géneros
export const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.status(200).json(genres)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los géneros' })
  }
}

// Obtener un género por ID
export const getGenreById = async (req, res) => {
  try {
    const { id } = req.params
    const genre = await Genre.findById(id)
    if (genre.length > 0) {
      res.status(200).json(genre[0])
    } else {
      res.status(404).json({ message: 'Género no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el género' })
  }
}
