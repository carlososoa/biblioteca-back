import { User } from '../models/user.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const jwt = require('jsonwebtoken')
const secreto = process.env.SECRET_JWT_KEY

export const login = async (req, res) => {
  try {
    const usuario = await User.findUserByUsername(req.body)

    if (usuario.length < 1) {
      res.status(400).json({ message: 'El usuario o la contraseña son incorrectos' })
    } else if (bcrypt.compareSync(req.body.password, usuario[0].password)) {
      // TODO TOKEN
      const payload = { user_id: usuario[0].user_id, username: usuario[0].username, rol: usuario[0].rol }
      const token = jwt.sign(payload, secreto,
        {
          expiresIn: '1h'

        })
      res
        .cookie('access_token', token, {
          domain: 'localhost',
          path: '/',
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
          sameSite: 'lax',
          secure: false
        })
        .set('Access-Control-Allow-Credentials', 'true')
        .status(200).json({ message: 'Usuario autenticado' })
    } else {
      res.status(400).json({ message: 'El usuario o la contraseña son incorrectos' })
    }
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
