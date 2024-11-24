/* eslint-disable camelcase */
import { turso } from '../db/connection.js'

export class Genre {
  static async create (genreData) {
    const { nombre } = genreData
    const query = 'INSERT INTO generos (nombre) VALUES (?)'
    await turso.execute({ sql: query, args: [nombre] })
  }

  static async findAll () {
    const results = await turso.execute({ sql: 'SELECT * FROM generos', args: [] })
    return results.rows
  }

  static async findById (genero_id) {
    const results = await turso.execute({ sql: 'SELECT * FROM generos WHERE genero_id = ?', args: [genero_id] })
    return results.rows
  }
}
