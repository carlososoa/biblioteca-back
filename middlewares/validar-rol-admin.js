import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const jwt = require('jsonwebtoken')

export const validarRolAdmin = (req, res, next) => {
  if (req.payload.rol != 'admin') {
    return res.status(401).json({ mensaje: 'Error, usuario no autorizado' })
  } next()
}
