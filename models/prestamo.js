/* eslint-disable camelcase */
import { turso } from '../db/connection.js'
import 'dotenv/config'

export class Prestamo {
  static async create (prestamoData) {
    const { user_id, libro_id } = prestamoData
    const estado = 'Activo'
    const fecha_inicio = new Date()
    const fecha_limite = new Date()
    fecha_limite.setDate(fecha_inicio.getDate() + 7)

    const query = 'INSERT INTO prestamos (fecha_inicio, user_id, libro_id, fecha_limite, estado) VALUES (?, ?, ?, ?, ?)'

    try {
      await turso.execute({ sql: query, args: [fecha_inicio, user_id, libro_id, fecha_limite, estado] })
      console.log('ok')
    } catch (error) {
      console.log(error)
    }
  }

  static async findAll () {
    const results = turso.execute({
      sql: 'SELECT p.*, u.username, l.titulo FROM prestamos p JOIN users u ON p.user_id = u.user_id JOIN libros l ON p.libro_id = l.libro_id',
      args: []
    })
    return (await results).rows
  }

  static async findPrestamoById (data) {
    const { prestamo_id } = data
    console.log(prestamo_id)
    const results = turso.execute({
      sql: 'SELECT * FROM prestamos WHERE prestamo_id = ?',
      args: [prestamo_id]
    })
    return (await results).rows
  }

  static async findByUserId (data) {
    const { user_id } = data
    const results = turso.execute({
      sql: 'SELECT * FROM prestamos WHERE user_id = ?',
      args: [user_id]
    })
    return (await results).rows
  }

  static async findByLibroId (data) {
    const { libro_id } = data
    const results = turso.execute({
      sql: 'SELECT * FROM prestamos WHERE libro_id = ?',
      args: [libro_id]
    })
    return (await results).rows
  }

  static async updateById (id, data) {
    const prestamo_id = id
    const { fecha_fin, multa, pago, saldo, fecha_pago, estado } = data
    const results = turso.execute({
      sql: 'UPDATE prestamos SET fecha_fin = ?, multa = ?, pago = ?, saldo = ?, fecha_pago = ?, estado = ? WHERE prestamo_id = ?',
      args: [fecha_fin, multa, pago, saldo, fecha_pago, estado, prestamo_id]
    })
    return (await results).rows
  }

  static async deleteById (id) {
    const prestamo_id = id
    const results = turso.execute({
      sql: 'DELETE FROM prestamos WHERE prestamo_id = ?',
      args: [prestamo_id]
    })
    return (await results).rows
  }

  static async findAllActive () {  
    const estado = "Activo"    
    const results = turso.execute({      
      sql: 'SELECT prestamos.prestamo_id, users.username AS nombre_usuario, libros.titulo AS titulo_libro, prestamos.estado FROM prestamos JOIN users ON prestamos.user_id = users.user_id JOIN libros ON prestamos.libro_id = libros.libro_id WHERE prestamos.estado = ?',
      args: [estado]
    })
    
    return (await results).rows
  }

  static async devolucion (id, data) {
    const prestamo_id = id
    const {  multa, saldo, estado , observacion } = data
    const fecha_fin = new Date()
    const results = turso.execute({
      sql: 'UPDATE prestamos SET fecha_fin = ?, multa = ?, saldo = ?, estado = ?, observacion = ? WHERE prestamo_id = ?',
      args: [fecha_fin, multa, saldo, estado, observacion, prestamo_id ]
    })
    return (await results).rows
  }
}
