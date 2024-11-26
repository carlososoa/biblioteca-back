import { Prestamo } from '../models/prestamo.js'
import { Book } from '../models/libro.js'

export async function createPrestamo (req, res) {
  const resultado = await Book.findById(req.body.libro_id)
  const libro = resultado[0]
  const estado = libro.estado
  if (estado === 'Disponible') {
    try {
      await Prestamo.create(req.body)
      await Book.cambioEstado(req.body.libro_id, 'Prestado')
      res.status(201).json({ message: 'Préstamo creado exitosamente' })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  } else {
    res.status(400).json({ message: 'El libro seleccionado no está disponible' })
  }
}

export const getAllPrestamos = async (req, res) => {
  try {
    const prestamos = await Prestamo.findAll()
    res.status(200).json(prestamos)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getPrestamoById = async (req, res) => {
  try {
    const prestamo = await Prestamo.findPrestamoById(req.params)
    if (prestamo.length > 0) {
      res.status(200).json(prestamo[0])
    } else {
      res.status(404).json({ message: 'Préstamo no encontrado' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getPrestamosByUserId = async (req, res) => {
  try {
    const prestamos = await Prestamo.findByUserId(req.params)
    res.status(200).json(prestamos)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getPrestamosByLibroId = async (req, res) => {
  try {
    const prestamos = await Prestamo.findByLibroId(req.params)
    res.status(200).json(prestamos)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updatePrestamo = async (req, res) => {
  try {
    await Prestamo.updateById(req.params.id, req.body)
    res.status(200).json({ message: 'Préstamo actualizado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deletePrestamo = async (req, res) => {
  try {
    await Prestamo.deleteById(req.params.id)
    res.status(200).json({ message: 'Préstamo eliminado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
