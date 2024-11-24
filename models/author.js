/* eslint-disable camelcase */
import { turso } from '../db/connection.js'

export class Author {
  static async create (authorData) {
    const { nombre } = authorData
    const query = 'INSERT INTO autores (nombre) VALUES (?)'
    await turso.execute({ sql: query, args: [nombre] })
  }

  static async findAll () {
    const results = await turso.execute({ sql: 'SELECT * FROM autores', args: [] })
    return results.rows
  }

  static async findById (autor_id) {
    const results = await turso.execute({ sql: 'SELECT * FROM autores WHERE autor_id = ?', args: [autor_id] })
    return results.rows
  }
}
