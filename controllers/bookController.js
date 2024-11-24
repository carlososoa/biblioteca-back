import { Book } from '../models/libro.js'

export async function createBook (req, res) {
  try {
    await Book.create(req.body)
    res.status(201).json({ message: 'Libro creado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll()
    res.status(200).json(books)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (book.length > 0) {
      res.status(200).json(book[0])
    } else {
      res.status(404).json({ message: 'Libro no encontrado' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateBook = async (req, res) => {
  try {
    await Book.update(req.params.id, req.body)
    res.status(200).json({ message: 'Libro actualizado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteBook = async (req, res) => {
  try {
    await Book.delete(req.params.id)
    res.status(200).json({ message: 'Libro eliminado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
