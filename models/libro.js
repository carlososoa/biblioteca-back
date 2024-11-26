/* eslint-disable camelcase */
import { turso } from '../db/connection.js'

export class Book {
  static async create (bookData) {
    const { titulo, anio, genero_id, autor_id, editorial_id } = bookData
    const estado = 'Disponible'
    const query = 'INSERT INTO libros (titulo, anio, genero_id, autor_id, editorial_id, estado) VALUES (?, ?, ?, ?, ?, ?)'
    await turso.execute({ sql: query, args: [titulo, anio, genero_id, autor_id, editorial_id, estado] })
  }

  static async findAll () {
    const results = await turso.execute({
      sql: 'SELECT libros.*, generos.nombre as genero_nombre, autores.nombre as autor_nombre, editoriales.nombre as editorial_nombre FROM libros JOIN generos ON libros.genero_id = generos.genero_id JOIN autores ON libros.autor_id = autores.autor_id JOIN editoriales ON libros.editorial_id = editoriales.editorial_id',
      args: []
    }
    )
    return results.rows
  }

  static async findById (libro_id) {
    const results = await turso.execute({ sql: 'SELECT * FROM libros WHERE libro_id = ?', args: [libro_id] })
    return results.rows
  }

  static async update (libro_id, bookData) {
    const { titulo, anio, genero_id, autor_id, editorial_id, estado } = bookData
    const query = 'UPDATE libros SET titulo = ?, anio = ?, genero_id = ?, autor_id = ?, editorial_id = ?, estado = ? WHERE libro_id = ?'
    await turso.execute({ sql: query, args: [titulo, anio, genero_id, autor_id, editorial_id, estado, libro_id] })
  }

  static async delete (libro_id) {
    const query = 'DELETE FROM libros WHERE libro_id = ?'
    await turso.execute({ sql: query, args: [libro_id] })
  }

  static async cambioEstado (id, data) {
    const libro_id = id
    const estado = data
    const query = 'UPDATE libros SET estado = ? WHERE libro_id = ?'
    await turso.execute({ sql: query, args: [estado, libro_id] })
  }
}
