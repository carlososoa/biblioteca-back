/* eslint-disable camelcase */
import { turso } from '../db/connection.js'

export class Editorial {
  static async create (editorialData) {
    const { nombre } = editorialData
    const query = 'INSERT INTO editoriales (nombre) VALUES (?)'
    await turso.execute({ sql: query, args: [nombre] })
  }

  static async findAll () {
    const results = await turso.execute({ sql: 'SELECT * FROM editoriales', args: [] })
    return results.rows
  }

  static async findById (editorial_id) {
    const results = await turso.execute({ sql: 'SELECT * FROM editoriales WHERE editorial_id = ?', args: [editorial_id] })
    return results.rows
  }
}
