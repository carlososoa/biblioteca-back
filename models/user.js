import { turso } from '../db/connection.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'

const saltRounds = process.env.SALT_ROUNDS

export class User {
  static async create (userData) {
    const { username, password, email } = userData
    const passwordHashed = bcrypt.hashSync(password, parseInt(saltRounds))
    const query = 'INSERT INTO users (username, password, email, rol) VALUES (?, ?, ?, ?)'
    await turso.execute({ sql: query, args: [username, passwordHashed, email, 'estudiante'] })
  }

  static async findAll () {
    const results = turso.execute({
      sql: 'SELECT * FROM users',
      args: []
    })
    return (await results).rows
  }

  static async findUserById (data) {
    // eslint-disable-next-line camelcase
    const { user_id } = data
    const results = turso.execute({
      sql: 'SELECT * FROM users WHERE user_id = ?',
      // eslint-disable-next-line camelcase
      args: [user_id]
    })
    return (await results).rows
  }

  static async findUserByUsername (data) {
    // eslint-disable-next-line camelcase
    const { username } = data
    const results = turso.execute({
      sql: 'SELECT * FROM users WHERE username = ?',
      // eslint-disable-next-line camelcase
      args: [username]
    })
    return (await results).rows
  }

  static async findUserByEmail (data) {
    // eslint-disable-next-line camelcase
    const { email } = data
    const results = turso.execute({
      sql: 'SELECT * FROM users WHERE email = ?',
      // eslint-disable-next-line camelcase
      args: [email]
    })
    return (await results).rows
  }
}
