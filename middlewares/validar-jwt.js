import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const jwt = require('jsonwebtoken')
require('dotenv').config()

export const validarJWT = (req, res, next) => {
  const autorization = req.cookies.access_token
  const token = autorization

  /* if (autorization && autorization.toLowerCase().startsWith('bearer')) {
    token = autorization.split(' ')[1]
  } */

  if (!token) {
    return res.status(401).json({ mensaje: 'Error, usuario no autorizado no hay token' })
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT_KEY)
    req.payload = payload
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ mensaje: 'Error, usuario no autorizado' })
  }
}
